// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Token {
    // address 속성명, uint256 속성값, balances 변수명의 객체
    mapping(address => uint256) public balances;
    // 여기에서 상태변수 이름을 규격에 맞게 작성 해줘야한다.
    string public name = "bellToken"; // 토큰의 이름
    string public symbol = "BTK"; // 토큰의 단위
    uint8 public decimals = 18; // 소수점 단위
    uint256 public totalSupply = 1000000000 * 10 ** decimals; // 발행량
    // 처음 컨트랙트를 배포한 사람이 가지고 있다.

    constructor() {
        balances[msg.sender] = totalSupply; // 배포한 사람의 EOA에 총 발행량 지급 
    }

    function balanceOf(address owner) public view returns(uint256 balance){
        // 조회할 사람의 주소 owner
        return balances[owner];
    }

    function transfer(address to, uint256 value) public returns(bool success) {
        // require() 함수의 매개변수가 true이면 실행이고 false면 종료
        require(balances[msg.sender] >= value);
        balances[msg.sender] -= value;
        balances[to] += value;

        return true;
    }

    function send(address from, address to, uint256 value) public returns(bool success){
        // 
        require(balances[from] >= value);
        balances[from] -= value;
        balances[to] += value;
        
        return true;
    }


 
}