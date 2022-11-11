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
    def proof_of_block(self, previous_proof):
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
    # memo에 설명 참조
    def hash(self, block):
        # .encode() 를 붙여서 hashlib sha256에서 요구하는 형식을 갖춤
        encoded_block = json.dumps(block, sort_keys= True).encode()
        # .hexdigest() 함수를 통해서 16진수 형식으로 값을 도출해냄
        return hashlib.sha256(encoded_block).hexdigest()
    
# 2 - mining blockChain