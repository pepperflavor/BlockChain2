/* 솔리디티 버전을 먼저 명시해줘야한다*/
pragma solidity ^0.8.15;


// HelloWorld 컨트랙트
contract HelloWorld{
    string text;
    constructor(){
        text = "Hello robot";
    }

    function getText() public view returns(string memory){
        return text;
    }

    function setText(string memory value) public{
        text = value;
    }
}

// npm install, 솔리디티 명령을 컴파일 해주는 라이브러리
// npm install sloc

/*
    컴파일 명령어
    npx solc --bin --abi [파일경로]

    abi 파일은 스마트 컨트랙트 안에 매개 변수난 함수들을 json현식으로 나타낸 리스트
    함수를 호출하거나 데이터를 호출해서 받을 수 있다.
    실제로 스마트 컨트랙트 안에서는 바이트 코드로 변환되어서 담겨있다.

    bin : 컴파일된 bite 코드내용 이더리움 네트워크 상에 배포
*/ 


