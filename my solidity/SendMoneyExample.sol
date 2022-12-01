// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SendMoneyExample{

    uint public balanceReceived;

    //payable 을 선언해 이 함수로 돈을 받는다는걸 컴파일러가 인식하게 함
    function receiveMoney() public payable {
        balanceReceived += msg.value;
    }

    // 위의 함수를 통해 송금받았다면 이 주소의 원장은 이 주소안에 보낸만큼 돈이 들어있다는걸 안다
    function getBalance()public view returns(uint){
        return address(this).balance;
    }

    // function wirhdrawMoney() public {
    //     address payable to = msg.sender;

    //     // address가 호출 할 수 있는 속성(잔고도 속성, 전송도 함수)
    //     // 전송 함수를 호출하려면 인수가 필요하다. 필요한 인수는 이 변수에 저장되어있는 주소로
    //     // 전송하려는 웨이의 양
    //     to.transfer(this.getBalance());
    // }
}