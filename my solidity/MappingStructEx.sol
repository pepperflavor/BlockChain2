//pragma solidity ^0.5.13;

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
    mapping(address => uint) public balanceReceived;

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function sendMoney() public payable {
        balanceReceived[msg.sender] += msg.value;
    }

    function withdrawMoney(address payable _to, uint _amount) public {
        // 해당 주소에 충분한 잔액이 있는지 확인
        require(balanceReceived[msg.sender] >= _amount);
        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }


    // 전액 송금
    function withdrawAllMoney(address payable _to)public {
// 먼저 전송하고 0으로 설정할 수 도 있지만 재입장의 문제 때문에
// check effects interactions 패턴을 따라야한다

        // 그사람이 매핑에 가지고 있는 금액을 알려줌
        uint balanceToSend = balanceReceived[msg.sender];
        balanceReceived[msg.sender] = 0;
        // to : 필드에 전솔 할 수 있다.
        _to.transfer(balanceToSend);
    }
}

