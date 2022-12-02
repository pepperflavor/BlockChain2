// ERC-20 스마트 컨트랙트 토큰 발행

// ERC-20은 이더리움 네트워크에서 표준 토큰
// 정해진 규격대로 만들어 줘야 한다.

// 규격대로 만들어주면 토큰을 생성 할 수 있는데
// 변수명도 정해진대로 만들어줘야 한다.

// 토큰의 단위 symbol이라는 변수에 담긴 내용은 토큰의 단위 ETH
// balances 잔액의 내용이 들어있다. (UTXO 같은 느낌)

// balance = {
//     address : String,
//     amount : Number
// }

// token = {
//     name : String,
//     symbol : String,
//     balances : balance[]
// }

// balances = [
//     {   
//         address : "0x044DB4206BC87Dc9b6f6A32E99d1E53B6f72185b",
//         amount : "100"
//     },
//     {   
//         address : "주소",
//         amount : "잔액"
//     },
//     {   
//         address : "주소",
//         amount : "잔액"
//     },
// ]

// 솔리디티의 address 라는 데이터 타입
// address
// 20byte 짜리 데이터 타입이고 계정이나 주소가 40글자로 만들어진
// 20byte 짜리 문자열 address는 string 타입이고 20byte 저장공간을 가지고 있다.

// mapping
// mapping(string => uint256)
// mapping데이터 타입은 우리가 자바스크립트에서 사용한 객체라고 보면 된다
// string이 속성명 uint256속성값이 된다.

// mapping(string => uint256) 표현을 하면
// {
//     "name" : 50
// }

// 선언해서 사용 해보면
// mapping(address => uint256) public balance;
// 데이터의 타입은 mapping(address => uint256) 객체형식
// public으로 공개
// 변수명은 balance
// balace를 호출하면
// {
//     "주소" : 1000,
//     "주소" : 1000,
//     "주소" : 1000,
//     "주소" : 1000,
// }

// 컨트랙트에서 인스턴스를 생성할때 constructor() 함수에 매개변수를 추가해서 인스턴스 생성을 할 수 있따. 우리가 인스턴스를 생성하는건 배포하기 전에 매개변수를 전달 해줘야 한다.

// 배포를 하고나서 트러플 콘솔창에
// 배포한 트랜잭션 해쉬를 조회하면
// web3.eth.getTransaction("0xe2a7ccbc849917c6a4ed90c6c565b9bdfa649bbe94bd1f0b7f80cef4258187eb");
// input값에 우리가 전달한 매개변수 50의 인자값을 표시
// 0000000000000000000000000000000000000000000000000000000000000032

// 네트워크에서 컨트랙트를 실행한 사람의 주소를 가져올 수 있는 방법 
// msg.sender(예약어) : 실행시킨 사람의 주소 네트워크 안에서 사용할 수 있는 변수

// test2.sol 작성 후 컴파일하고 2_deploy_Test.js의 내용 수정후 Test2로 배포 진행 하고 트러플 콘솔창 열기
// 반환값 instance를 it에 대입해서 it.owner 조회하면 뜸 
// Test2.deployed().then(its => it = its);
// it.owner()로 조회 하면 배포한 사람의 주소가 뜬다.

// 응용을 해서 토큰을 만들어보자 토큰 발행
// Token.sol 파일 만들고 2_deploy_Test 파일 수정 Test2를 Token으로 바꾸고
// deploy의 매개변수 두번째 매개변수 지우고 50 지우고

// 배포 진행 하고
// Token.deployed().then(its => it = its);
// 인스턴스 조회 하고

// it.balanceOf("코인베이스 계정") // 총 발행량 확인 가능
// it.transfer("0x7370Eb75D23C23Fa35157155f006b9644D3b44C4",100)
// 두번째 계정에 100토큰 보내면
// it.balaceOf("두번째 계쩡") // 받은 토큰 확인 가능

// from to 두개 사용하는 함수 만들기 