/*
# Module1 - Create a BlaockChain

import datetime
import hashlib
import json
from flask import Flask, jsonify

# 1 -  buildin a blockChain\
# 클래스로 작성하는게 효율적

# 블록체인 초기화
class BlockChain:
    # 클래스 init
    def __init__(self):
        # chain이 배열형태의 데이터라고 선언한 것 
        self.chain = []
        # 제네시스블록 설정
        self.create_block(proof = 1, previous_hash = '0')

    # Mining 다음 실행할 함수이다. self , 증명, 이전해시값을 인수로 받는다
    # 그래서 인수로 이전 블록의 해시값을 받아야함
    def create_block(self, proof, previous_hash):
        block = {'index': len(self.chain) + 1,
                 # string 형으로 바꾸는 이유 : 나중에 json 파일에서 문제가 생길 수 있음
                 'timestamp': str(datetime.datetime.now()), 
                 # 작업증명을 해결해서 블록을 채굴할 때 얻는 증명
                 'proof': proof,
                 'previous_hash': previous_hash,
                 }
        #체인에 추가하기
        self.chain.append(block)
        return block

    def get_previous_block(self):
        # 해당 체인의 마지막 인덱스, 즉 체인의 마지막 블록을 불러온다
        return self.chain[-1]

    # 작업증명 함수 - 채굴자가 해당 블록의 최초 채굴자인지 확인해야함
    def proof_of_work(self, previous_proof):
        new_proof = 1
        check_proof = False
        while check_proof is False:
            # 연산이 비대칭으로 이루어져야한다고한다. 
            # 해시 연산 결과 선행4개의 문자가 0으로 시작하는지 확인하기 => 그렇다면 해당 증명을 새로운 블록을 채굴할 수 있는
            # 증명이 되는 것이다.
            hash_operation = hashlib.sha256(str(new_proof**2 - previous_proof**2).encode()).hexdigest()
            # [:4] : 인덱스 0, 1,2,3을 뜻함
            if hash_operation[:4] == '0000':
                check_proof = True
            else:
                new_proof += 1
            return new_proof

    # 블록 해싱할 함수
    # 블록(딕셔너리를)을 문자열로 바꿈(=해싱)한다
    # aboutBlockChain.js에 설명 참조
    def hash(self, block):
        # .encode() 를 붙여서 hashlib sha256에서 요구하는 형식을 갖춤
        encoded_block = json.dumps(block, sort_keys= True).encode()
        # .hexdigest() 함수를 통해서 16진수 형식으로 값을 도출해냄
        return hashlib.sha256(encoded_block).hexdigest()

    # 체인이 유효한지 확인하는 함수(모든 블록의 이전해시값이 이전블록의 해시값과 같아야 한다)
    def is_chain_valid(self, chain):
        previous_block = chain[0]
        # 인덱스의 첫번째값이 0 이 아닌 1로 만들어줌
        block_index = 1
        while block_index < len(chain):
            current_block = chain[block_index]
            # 여기서 hash는 현재 다루는 블록체인의 메서드이기 때문에
            # 이전블록에 대해서는 self.hash로 불러와야한다
            if current_block['previous_hash'] != self.hash(previous_block):
                return False
            # proof_of_work에서 작업한 선행 문자열4개가 '0000'인지 확인
            # 이전 블록(객체)의 proof 키의 값에 접근하는 것 
            previous_proof = previous_block['proof']
            # 현재블록의 증명키를 가져와서 현재증명을 불러온다
            proof = current_block['proof']
            # 채굴자들이 풀어야하는 문제를 정의한 해시연산
            hash_operation = hashlib.sha256(str(proof**2 - previous_proof**2).encode()).hexdigest()
            # [:4] : 첫번째~네번째 문자를 뜻함
            # 여기서는 만든 블록들의 선행 4문자열이 0000 이기 때문에 이렇게 검증했다
            if hash_operation[:4] != '0000':
                return False
            # 다음 블록의 검증 과정에서는 방금 검증한 current블록이 pre블록이 되어야한다. 그 설정을 해주는 것
            previous_block = current_block
            block_index += 1
        return True
             
    
# 2 - mining blockChain

# 웹앱 생성
app = Flask(__name__)

# 블록체인 생성
blockchain = BlockChain()

# 새 블록 채굴하기
# 경로 / 앞에 전체 url이 담겨있다 여기서는" http://127.0.0.1:5000/ " 임
# get 요청은 얻는 것만, post는 생성도 한다
@app.route("/mine_block", method =['GET', 'POST'])
    # 1. 블록을 캐려면 이전 증명을 기반으로 증명을 찾아서 작업증명 문제를 해결해야함
    # 2. 그러기 위해서 proof_of_work를 사용할 건데 인수로(self, previous_proof) 이전 블록의 증명이 필요하다.
    # 그래서 get_previous_block 함수를 이용해 마지막 블록을 얻어와 딕셔너리에서 증명키를 취한다.
    # ++++ 마지막블록의 해시 값을 이전해시 값으로 할당해주어야 새로운 마지막 블록으로 등록할 수 있기 때문에
def mine_block():
    previous_block = blockchain.get_previous_block()
    previous_proof = previous_block['proof']
    # 체인의 마지막 블록의 증명을 갖고온다
    proof = blockchain.proof_of_work(previous_proof)
    # hash 함수 사용해서 현재 필요한 이전해시의 해시값을 얻는다
    previous_hash = blockchain.hash(previous_block)
    block = blockchain.create_block(proof, previous_hash)
    # 딕셔너리 형에서 '키' : '값'
    response = {'message' : 'Congratulatioin! you just mined a block!',
                'index': block['index'],
                'timestamp': block['timstamp'],
                'proof': block['proof'],
                'previous_hash' : block['previous_hash']}
    # 공식문서 http router 참조
    return jsonify(response), 200


#2. 트랜잭션 생성 분산네트워크에서 새로운 작업 생성
# getting the full Blockchain
@app.route('get_chain', methods =['GET'])
def get_chain():
    # mine_block를 실행하면 맨처음 선언한 chain배열에 데이터가 저장될것이고 그걸 불러온다
    response = {'chain' : blockchain.chain,
                # 체인의 길이(블록갯수)를 세기 위해서 마지막 length를 구한다 
                'length' : len(blockchain.chain)}
    return jsonify(response), 200

*/