// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.1;

contract SendMoneyExample {

    uint public balanceReceived;
    uint public lockedUntil;

    address owner;
    bool public paused;

    constructor() public {
        owner = msg.sender;
    }

    function setPaused(bool _paused) public {
        require(msg.sender == owner, "YOU are not the owner");
        paused = _paused;
    }

    function receiveMoney() public payable {
        balanceReceived += msg.value;
        lockedUntil = block.timestamp + 1 minutes;
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdrawAllMoney(address payable _to) public {
        require(msg.sender == owner, "Your are not ths owner");
        require(!paused, "Constract is paused");
        _to.transfer(address(this).balance);
    }

    function withdrawMoney() public {
        if(lockedUntil < block.timestamp) {
            address payable to = payable(msg.sender);
            to.transfer(getBalance());
        }
    }

    function withdrawMoneyTo(address payable _to) public {
        if(lockedUntil < block.timestamp) {
            _to.transfer(getBalance());
        }
    }


    // 스마트 계약 안에 저장된 나머지 잔고를 받을 주소를 입력해야함 
    function destroySmartContract(address payable _to) public {
        require(msg.sender == owner, "Your (are not ths owner");
        // 솔리티 내부 함수 selfdestruct() 인수는 나머지 잔고를 받을 ㅅ주소
        selfdestruct(_to);
    }
}            

// 입금 후 설정한 시간이 지난 후 출금할 수 있는 컨트랙트