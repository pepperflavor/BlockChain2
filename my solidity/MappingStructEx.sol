// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MappingStructEx{

    struct Payment{
        uint amount;
        uint timestamp;
    }

    struct Balance{
        uint totalBalance;
        uint numPayments;
        mapping(uint => Payment) payments;
    }


    // 키 유형을 value 타입으로 매핑할 수 있다.
    mapping(address => Balance) public balanceReceived;

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function sendMoney() public payable {
        balanceReceived[msg.sender].totalBalance += msg.value;

        // 이제 now는 사용하지 않는다 대신 block.timestamp: 블록생성시간 를 사용한다고함
        Payment memory payment = Payment(msg.value, block.timestamp);

        balanceReceived[msg.sender].payments[balanceReceived[msg.sender].numPayments] = payment;
        balanceReceived[msg.sender].numPayments++;
    }

    // 출금
    function withdrawMoney(address payable _to, uint _amount) public {
        // 해당 주소에 충분한 잔액이 있는지 확인
        require(balanceReceived[msg.sender].totalBalance >= _amount, "not enough funds");
        balanceReceived[msg.sender].totalBalance -= _amount;
        _to.transfer(_amount);
    }


    // 전액 송금
    function withdrawAllMoney(address payable _to)public {
        // 먼저 전송하고 0으로 설정할 수 도 있지만 재입장의 문제 때문에
        // check effects interactions 패턴을 따라야한다
        // 그사람이 매핑에 가지고 있는 금액을 알려줌
        uint balanceToSend = balanceReceived[msg.sender].totalBalance; // 갖고있는 돈 알려주기
        balanceReceived[msg.sender].totalBalance = 0;
        // to : 필드에 전솔 할 수 있다.
        _to.transfer(balanceToSend); // 돈 전송
    }
}

