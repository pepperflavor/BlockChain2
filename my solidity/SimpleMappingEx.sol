//pragma solidity ^0.6.0;

contract SimpleMappingExample{

    bool myvar1 = false;
    bool myvar2 = false;
    bool myvar3 = false;

    // 주소나 정수가 될 수 있는 모든 기초 변수를 제외하면 거의 모든것이 키 유형이 될 수 있다.
    // 컴파일하면 배열처럼 키로 접근할 수 있는 값으로 저장된다.
    // 키 : int형 값, 인덱스 : boll
    mapping(uint => bool) public myMapping;
    mapping(address => bool) public myAddressMapping;
    
       function setValue(uint _index) public {
        myMapping[_index] = true;
    }

    function setMyVar1ToTrue() public {
        myvar1 = true;
    }

    function setMyAddressToTrue() public{
        myAddressMapping[msg.sender] = true;
    }


    // 만약 스마트 컨트랙트의 논리가 특정 방식으로 프로그래밍 되었다면 특정주소의 비밀키를 가진 사람만
    // 매핑값을 가질 수 있다. 

}