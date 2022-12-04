//pragma solidity ^0.5.13;

contract MappingStructEx{
    // 키 유형을 value 타입으로 매핑할 수 있다.
    mapping(address => uint) public balanceReceived;

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function sendMoney() public payable {
        balanceReceived[msg.sender] += msg.value;
    }

    function withdrawAllMoney(address payable _to)public {
// 먼저 전송하고 0으로 설정할 수 도 있지만 재입장의 문제 때문에
// check effects interactions 패턴을 따라야한다

        // 그사람이 매칭에 가지고 있는 금액을 알려줌
        uint balanceToSend = balanceReceived[msg.sender];
        balanceReceived[msg.sender] = 0;
        // to : 필드에 전솔 할 수 있다.
        _to.transfer(balanceToSend);
    }
}

