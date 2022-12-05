// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;


contract StartStopUpdateExample{
    // 이 스마트 계약을 배포하는 계정의 주소를 저장할 변수
    address owner;

    bool public paused;

    // public을 선언해 외부에서 호출가능하도록
    // 계약 배포중 한번만 호출된다
    constructor() public {
        // 스마트 계약을 배포하기 위해 트랜잭션을 만드는 주소
        owner = msg.sender;
    }

    function sendMoney() public payable{

    }

    function setPaused(bool _paused) public {
        require(msg.sender == owner, "You are not owner");
        paused = _paused;
    }

    // 이 스마트 컨트랙트의 모든 자금을 송금한다
    // 그리고 그 스마트 계약을 _to 변수에 저장된 주소에 저장한다
    function withdrawAllMoney(address payable _to) public {
        require(msg.sender == owner, "You are not owner"); // 오류가 발생하면 블록체인에 반영되지 않고 트랜잭션이 롤백한다
        require(!paused == false, "Contract is public");
        _to.transfer(address(this).balance);
    }
}