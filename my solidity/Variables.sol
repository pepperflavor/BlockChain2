// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract WorkingWithVariables{
    uint public myUint;

    function setMyUint(uint _myUint) public{
        myUint = _myUint;
    }

    bool public myBool;

    function setMyBool(bool _myBool)public {
        myBool = _myBool;
    }

    uint8 public myUint8;

    function incrementUint() public {
        myUint8++;
    }

    function decrementUint() public {
        myUint8--;
    }

    address public myAddress;

    function setAddres(address _address) public {
        myAddress = _address;
    }

    // 계좌 잔고 조회하기 +) view는 읽기 함수
    function getBalanceOfAddress() public view returns(uint){
        return myAddress.balance;
    }

    string public myString = 'hello world';
    //string public myString;  이렇게만쓰고 배포하면 빈문자열이 나온다.
    // setMystring() 의 인수에 값을 넣으면 해당 문자열이 그대로 나옴

    // 문자열이나 다른 참조 유형이 있으면 memory 키워드를 입력해야 한다
    // _myString 인수가 스토리지 변수가 아니라 메모리에 저장될 것이라는걸 알려줌
    function setMyString(string memory _myString) public {
        myString = _myString;
    }

    
}