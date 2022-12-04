# Module 2 - Create a Cryptocurrency

# To be installed:
# Flask==0.12.2: pip install Flask==0.12.2
# Postman HTTP Client: https://www.getpostman.com/
# request==2.18.4: pip install requests==2.18.4


# Importing the libraries
# 블록 체인에 일부 노드를 추가할때 쓰는 라이브러리 request
import datetime
import hashlib
import json
from flask import Flask, jsonify, request
import requests
from uuid import uuid4
from urllib.parse import urlparse

# Part 1 - Building a Blockchain

class Blockchain:
    def __init__(self):
        self.chain = []
        # 멤풀 역할을하는 트랜잭션을 모아놓은 목록이 필요함
        # 블록 생성 이전에 트랜잭션이 생성되도록 위치도 중요함!
        self.transactions = []
        # 블록이 체인에 추가된 다음 트랜잭션 목록은 비워짐
        self.create_block(proof = 1, previous_hash = '0')
        self.nodes = set() # 노드는 순서가 없기 때문에 리스트형태가 아니다

    def create_block(self, proof, previous_hash):
        block = {'index': len(self.chain) + 1,
                 'timestamp': str(datetime.datetime.now()),
                 'proof': proof,
                 'previous_hash': previous_hash,
                 'transaction' : self.transactions } #  self.transactions 으로 모든 트랜잭션을 취할 수 있음
        # 블록에 추가되고 나서는 비워줘야한다. 여러블록이 같은 트랜잭션을 가질 수 없기 때문
        self.transactions = []
        self.chain.append(block)
        return block

    def get_previous_block(self):
        return self.chain[-1]

    def proof_of_work(self, previous_proof):
        new_proof = 1
        check_proof = False
        while check_proof is False:
            hash_operation = hashlib.sha256(str(new_proof**2 - previous_proof**2).encode()).hexdigest()
            if hash_operation[:4] == '0000':
                check_proof = True
            else:
                new_proof += 1
        return new_proof
    
    def hash(self, block):
        encoded_block = json.dumps(block, sort_keys = True).encode()
        return hashlib.sha256(encoded_block).hexdigest()
    
    def is_chain_valid(self, chain):
        previous_block = chain[0]
        block_index = 1
        while block_index < len(chain):
            block = chain[block_index]
            if block['previous_hash'] != self.hash(previous_block):
                return False
            previous_proof = previous_block['proof']
            proof = block['proof']
            hash_operation = hashlib.sha256(str(proof**2 - previous_proof**2).encode()).hexdigest()
            if hash_operation[:4] != '0000':
                return False
            previous_block = block
            block_index += 1
        return True

    # 트랜잭션 형식정해주기
    def add_transaction(self, sender, receiver, amount):
        # append 리스트 끝에 하나를 추가한다(그 자체를 원소로)
        self.transactions.append({ 'sender' : sender,
                                    'receiver' : receiver,
                                    'amount' : amount})
        previous_block = self.get_previous_block()
        return previous_block['index'] + 1


# 해당 주소를 포함하는 노드를 노드 집합에 포함하는 것이다
    def add_node(self, address):
        # toString 처럼 주소를 사용할 형식을 조정함. 노드의 주소 파싱
        parsed_url = urlparse(address)
        # 리스트 형태가 아니기 때문에 add를 사용했다
        self.nodes.add(parsed_url.netloc)

    #특정 노드에서 호출할 함수 노드들중 가장 긴 체인이 진짜 체인이 되어야 하니까
    def replace_chain(self):
        network = self.nodes
        longest_chain = None
        max_length = len(self.chain)
        for node in network:
            # request 라이브러리를 사용 get() /get_chain 요청의 응답을 얻어옴
            #response = requests.get('http://127.0.0.1:5000/get_chain') => 이렇게 적으면 5000번을 사용하는 하나의 노드만 가리키는 것이다. nodes에 담긴 노드들 전부를 훑어야 하기 때문에
            response = requests.get(f'http://{node}/get_chain')
            # 정상작동하는지 확인
            if response.status_code == 200:
                # get_chain 요청에서 길이를 받는걸 정의해 놓았기 때문
                length =  response.json()['length']
                chain = response.json()['chain']
                if length > max_length and self.is_chain_valid(chain):
                    max_length = length
                    # 가장 긴체인
                    longest_chain = chain
        if longest_chain:
            self.chain = longest_chain
            return True
        return False


# Part 2 - Mining our Blockchain

# Creating a Web App
app = Flask(__name__)

# Creating a Blockchain
blockchain = Blockchain()

# Mining a new block
@app.route('/mine_block', methods = ['GET'])
def mine_block():
    previous_block = blockchain.get_previous_block()
    previous_proof = previous_block['proof']
    proof = blockchain.proof_of_work(previous_proof)
    previous_hash = blockchain.hash(previous_block)
    block = blockchain.create_block(proof, previous_hash)
    response = {'message': 'Congratulations, you just mined a block!',
                'index': block['index'],
                'timestamp': block['timestamp'],
                'proof': block['proof'],
                'previous_hash': block['previous_hash']}
    return jsonify(response), 200

# Getting the full Blockchain
@app.route('/get_chain', methods = ['GET'])
def get_chain():
    # get_chain의 응답
    response = {'chain': blockchain.chain,
                'length': len(blockchain.chain)}
    return jsonify(response), 200

# Checking if the Blockchain is valid
# 유효성 검사, 트랜잭션과 같이 새로운 데이터를 만들지 않기 때문에 post를 쓰지 않는다
@app.route('/is_valid', methods = ['GET'])
def is_valid():
    is_valid = blockchain.is_chain_valid(blockchain.chain)
    if is_valid:
        response = {'message': 'All good. The Blockchain is valid.'}
    else:
        response = {'message': 'Human, we have a problem. The Blockchain is not valid.'}
    return jsonify(response), 200

# Running the app
# flask의 포트 번호는 5000번이다
app.run(host = '0.0.0.0', port = 5000)


# Part 3 - 합의 적용
