/*
    node.js 설치
    npm init -y

    트러플 설치
    npm install -g truffle

    npx truffle init 한 후에

    내가 작업할 sol파일을
    contracts에 넣으면 된다.
*/

/*
    현재 이용하는 브라우저에 맞는
    metamask  다운


    테스트 서버 보이게 하는 방법
    내 계정 프로필클릭 -> 설정 -> 고급 -> show test networks 온으로 돌려주기

    그다음 테스트 ether 받을 넷에 회원가입ㄱㄱ
    https://goerlifaucet.com/   => goerli 의 ether 얻을 수 잇음


    메타마스크에 가입하면 블록체인과 연결된다. 
    메타마스크 -> 인퓨라(Infura) -> 블록체인노드 -> 블록체인

    테스트 이더를 신청했을때
    browser <-> backend <-> blockChain Node <-> BlockChain

    이 두 서비스가 같은 원장을 공유하는 것 == 두 서비스에 걸쳐 공유 원장을 얻는 것

    송금 등 트랜잭션을 발생하면 해당 트랜잭션이 채굴된 블록체인에 담겨서 체인에 들어갈때까지
    약간의 시간이 필요하다


    트랜잭션 서명함수가 있고 해당 함수를 사용하기 위해 서명이 필요하다.
    
    개인키 -> 타원곡선 디지털서명 알고리즘(나선함수) -> 공개키
*/

/*
    솔리디티 컴파일러 설치, 배포 & 트랜잭션 실행 플러그인 설정하기

    솔리디티는 바이트 코드로 컴파일해야 한다.

    ** 중요
    pragma solidity ^0.8.1;
    버전이 달라져서 사용법이 달라졌을때 해당 코드가 오류를 일으키지 않도록
    사용한 버전을 명시하는 것


    스마트 컨트랙트는 블록체인에서 실행되며 바이트 코드로 배포된다.
    솔리디티 코드를 바이트 코드로 컴파일해서 바이트 코드를 배포하는 것이다.

    가나슈를 window에 깔고 quickstart를 하면 블록체인이자 지갑의 역할이다.


    솔리티에서 문자열로 작업하는 건 값이 많이 들어간다. 블록체인에 문자열로 작업하려면 수수료가 비쌈;
*/

/*
    솔리티의 변수!!!

    솔리티에서 모든 변수는 기본 값으로 초기화 된다
        - null undefined 같은 값이 없다는 뜻!!! 
            부호없는 정수 = 0
            boolean 형태 =false
            String = "" // 빈 문자열
            이렇게 기본 값으로 자동 지정된다.

    솔리디티는 모든 공개변수를 위해 getter 함수를 생성한다. getter 함수는 변수자체와 똑같은 이름을 가진다.

    Boolean
     - 키워드 'bool' : 선언할 떼 bool myVar; 이렇게 써준다.
        || 과 && 사용가능

    Uint8 to Uint256
        Uint8 에서 Uint256의 범위는 8 비트씩 증가한다
        ex) 부호없는 정수 Uint8의 범위 : 0 ~ 255, 정수 int8의 범위는 -128 ~ +127까지 입니다.
            그 이유! 2^8이 256 이기 때문(솔리티식 표기 : 2**8)
        Uint256 = 2^256 이고
        
        ***** 그냥 uint는 부호없는 정수 Uint256의 별칭이다
        이렇게 크기가 다른 이유는 가스비용 때문

    주소(Address)
        보통 하나의 주소에 20byte의 값이 들어간다. 특정 검사합을 준수하면 주소로 승인된다.

        - 스마트 컨트랙트 -> address || address -> 스마트 컨트랙트로 ether를 전송하는데 사용되는 함수들
        ex) .transfer(), .send(), .call.value(), .delegatecall()

        - 즉 블록체인과 상호작용하기 위해서 쓴다

        - 그냥 address와 address payable(미지급)은 다르다

        - balance라는 멤버를 갖고있다. 잔고를 보여줌

    문자열(String)과 Bytes
        - 둘다 특수한 배열이다.
        - 바이트 배열은 인덱스와 길이가 있어서 특정 인덱스에 엑세스 할 수 있다.
            하지만 문자열에는 그런 기능이 없다. 문자열 배열의 특정 가ㅓㅄ에 접근할 수 없다.
            그렇기 때문에 무자열을 최대한 사용 x. 심지어 저장할때 값도 비싸다

        - 문자열과 바이트의 차이점 : 바이트는 원데이터를 보관하기 위한 것(해시 등... ) 문자열은(UTF-8 데이터를 저장하기 위한 것)

*/

/*
    스마트 계약의 잔액을 얻는 방법
    스마트 계약의 잔액 을 얻으려면 먼저 계약 주소를 얻어야 합니다. 
    this이를 위해 계약 자체를 나타내는 키워드를 사용할 수 있습니다 .
    계약 주소가 있으면 부동산에 전화 하면 balance계약 잔액이 반환됩니다.
    한 줄의 코드로 이 작업을 수행할 수 있습니다 👇
    ===========================================
        address(this).balance;
    ===========================================
    
    원하는 것이 다른 계약의 잔액을 얻는 것이라면 다음과 같은 기능을 사용할 수 있습니다.
    ===========================================
        function getContractBalance(address ContractAddress) public view returns(uint){
                return ContractAddress.balance;
            }
    ===========================================


    */
   
   /*
     계정이 스마트 컨트랙트와 어떻게 연결되는지??

     외부 소유계정(EOA) : 비밀 키가 있는 계정  
                    이 계정으로 자금을 송금하고 트랜잭션을 개시한다. 
                    이더리움 블록체인 바깥에 있어서 이더리움 블록체인에 접근할 수 있지만 코드를 배포할 수 없다 <- 코드가 이 계정을 관리한다

     계약 계정이나 스마트 계약이 직접 트랜잭션을 개시할 수 는 없다. (트리거) 항상 외부 소유계정이 시작해줘야 한다.

     즉 (트랜잭션 안)
     외부계정-> (스마트 계약 -> 계약 계정)

     외부소유 계정이 이 트랜잭션을 시작하기만 한다면 다 상관 없다. 트랜잭션은 원자조작

     블록체인은 얼마가 들어있는지 저장하는 데이터 베이스!
     솔리디티 address 에는 중요한 멤버가 두개  1. 잔고(Wei로 표기되어있고 모든 정보는 공개되어있다.) 2.주소

     호출하는 스마트 계약에서 예외가 발생되는 경우가 있는데 .send() 함수가 예외를 종속시키지 않을 것이다(트랜잭션 생성을 안한다는 말인듯?)
    그리고 .call().gas().value()() 특정 양의 가스를 전달하고 boolean(아마도 false일듯)을 반환합니다. 그렇게 되면 내가 직접
    그 예외를 처리해야한다.


    이 두가지는 수수료(가스비)를 보내는 함수이다
    - send()
    - transfer()

*/

/*
    ether를 지갑이나 계정에 저장하는게 아니라 블록체인에 저장하고 그에 관한 정보에 접근해서 조회해주는 것이 계좌잔고임
*/

/*
            Smart Contract Life-Cycle
            
            - 
*/