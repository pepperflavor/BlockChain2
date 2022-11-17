// Go 설치
// Go 설치하는이유
// Geth를 빌드하는데 필요한 언어
// go-ethereum 약자가 Geth
// Go 언어로 만들인 이더리움 클라이언트 소프트웨어다.

// 권한이 필요한 명령어를 사용할때 sudo

// 윈도우 사용자
// 우분투 환경 접속 cmd 열고 wsl 입력
// 접속 종료는 exit
// 복붙안될때 마우스 우클릭으로 붙여넣기 쌉가능

// geth 실행하기위해
// 설치 명령어
// -------------------------------------------
// sudo apt update
// sudo apt install golang
// sudo apt install -y libgmp3-dev tree make build-essential
// -------------------------------------------

// go 버전 업데이트 명령어
// -------------------------------------------
// git clone https://github.com/udhos/update-golang
// cd update-golang
// sudo ./update-golang.sh
// -------------------------------------------

// geth를 받을 클론 폴더를 만들어서 git clone을 하자
// 설치

// rm -rf | ls -a | go version

// 경로를 나와서 
// cd ~
// 폴더 이름을 Ethereum 만들어 주자
// mkdir Ethereum
// 그 폴더 안으로 이동해서
// cd Ethereum

// git clone https://github.com/ethereum/go-ethereum

// clone이 다 받아지면
// cd go-ethereum
// geth를 실행 시켜주자
// make geth

// 파일이 들어있는 폴더 삭제 sudo rm -r go-ethereum

// go 1.6 버전 이상
// go 버전 업데이트 
// 제거 하고
// sudo add-apt-repository ppa:longsleep/golang-backports
// 업데이트
// sudo apt update
// 업데이트 버전 설치
// sudo apt install golang-go

// 빌드된 경로로 이동해서 
// cd ./build/bin

// geth 버전을 한번 확인해보고 
// ./geth version

// geth실행 명령어
// ./geth

// 사용할때마다 폴더 경로까지 들어가서 실행하는게 귀찮고 번거로워서 설정하는게 
// pc의 환경변수 

// 현재 있는 폴더의 절대 경로 확인
// pwd

// 절대 경로 확인 
// /root/Ethereum/go-ethereum/build/bin

// vi ~/.bash_profile
// 수정 i키 눌러서 수정을 하고
// esc 눌러서 나온후 :wq! 저장 후 종료

// 작성 방법
// export PATH=$PATH:/root/Ethereum/go-ethereum/build/bin
// 환경 변수 설정
// source ~/.bash_profile
// 환경 변수 설정이 된거고 확인은 이제 bin 경로 말고 어디 어디서든
// 다른 경로를 이동해서 geth

// 일반 터미널에서
// 가나쉬 설치 명령어
// 가나쉬 로컬에서 이더리움 블록체인 가상 네트워크를 생성할 수 있게 해준다
// 테스트를 할 수 있도록 
// 가나쉬로 생성된 네트워크에서는
// 채굴 기능 없고 P2P기능도 없다
// 블록 / 체인 / 트랜잭션과 관련된 기능만 있다.
// 1tx에 1개의 블록 생성
// 가나쉬로 트랜잭션을 발생시키면 실시간 확인이 가능해서 테스트에 용이하다.
//--------------------------------------------------
// 설치 명령어
// npm install -g ganache-cli
// 실행 명령어
// npx ganache-cli
//--------------------------------------------------

// npm install == yarn add
// npm install -global or -g == yarn global add

/*
    비트코인과 이더리움의 차이가
    특징은 이더리움의 가장 큰 특징 스마트 컨트랙트를 구현할 수 있다.
    비트코인은 트랜잭션을 만들면 계정의 소유자가 다른 계정의 소유자에게 10 코인을 전송한다
    같은 거래를 주로 했는데

    이더리움은 스마트 컨트랙트를 사용해서 기능 구현이 가능하다.
    A를 통해 B -> C의 물건을 구매하는 상황은
    B에게 A가 상품의 금액을 받아서 C에게 받은 사실을 알려준다.
    그러면 C가 상품을 A에게 주고 A가 상품을 확인하면 스마트 컨트랙트가 동작해서 
    B의 계정에서 C의 계정으로 코인을 보내준다.
    스마트 컨트랙트는 거래에 대해 조건에 충족한 계약 형태의 거래를 가능하게 해준다.
    코인을 받고 물건을 전달하는 거래 뿐만아니라 조건에 따라 특정한 코드가 실행되서 
    거래를 할 수 있게끔 추가 조건들을 기능으로 구현할 수 있다.
    스마트 컨트랙트를 작성할 때 솔리디티를 사용해서 스마트 컨트랙트를 작성할 수 있다.


    스마트 컨트랙트를 구현할 때 이더리움 EVM이라는걸 사용하고,
    Account, Transaction의 내용도 조금 다르다



    EVM이란?
    이더리움 가상 머신의 약자 자바를 알면 JVM 이런 개념적인 비슷한 기능
    스마트 컨트랙트를 실행할 때 분산 네트워크 환경에서 모든 노드들이 스마트 컨트랙트에 의해 
    특정한 결과를 얻어야 할 때 솔리디티 언어로 작성한 코드를 EVM을 통해서 실행 시키게 한다

    1. 솔리디티로 컨트랙트 코드 작성
    2. 바이트 코드로 컴파일
    3. EVM에서 컴파일된 바이트 코드 실행

    이더리움 스마트 컨트랙트라는 프로그램을 실행 할 수 있는 플랫폼으로 기능할 수 있는
    핵심은 EVM이라는 가상 컴퓨터ㅗ가 있기 때문이다
    우리가 만든 규칙에 따라서 스마트 컨트랙트 코드를 실행하고
    그 결과를 업데이트 해준다.

    EVM은 가상머신이고 정해진 스마트 컨트랙트 규칙에 따라서 코드를(계약) 실행하고 그 결과로 변한 상태를
    업데이트 해준다.

    Account
    이더리움 네트워크에는 EOA, CA라는 두종류의 계정이 존재하고


    EOA는 외부 소유 계정()
    개인키로 제어되는 계정으로 코드를 저장하지 않는다
    스마트 컨트랙트에 대한 접근을 제어한다 
    EOA로 트랜잭션을 시작할 수 있다.
    EOA는 다른 EOA또는 CA에 메세지를 보낼 수 있으며 이동작은 개인키를 사용해서 트랜잭션을 만들고
    서명하고 두개의 EOA사이에서 발생하는 메세지는 단순히 ETH만을 전송
    EOA에서 CA에 보내는 메세지는 CA에 저장된 코드를 활성화 시킨다.
    명령 EOA가 전송한 트랜잭션부터 시작된다고 보면 된다.


    CA 계약 계정(Contract Account)
    스마트 컨트랙트의 로직에서 제어를 하고 스마트 컨트랙트 코드를 저장할 수 있다.(코드의 해시)
    개인키가 없고 스스로 스스로 트랜잭션을 시작할 수가 없다
    외부에서 트랜잭션에 대한 응답을 통해 트랜잭션을 실행할 수 있다.

    CA는 EOA와 다르게 개인키를 가지고 있지 않ㅅ고 스스로 트랜잭션을 생성할 수 도 없다
    CA는 다른 CA또는 EOA로 부터 받은 트랜잭션에 대한 응답으로만 트랜잭션을 실행할 수 있다.

    Transaction
    이더리움 네트워크에서 트랜잭션은 EOA에 의해서 서명되고
    속성들은
    from : 보내는 계정
    to : 받는 계정
    nonce : 보내는 계정이 발생시킨 총 트랜잭션 횟구
    value : 보내는 금액
    gasLimit : 트랜잭션이 사용할 수 있는 가스의 최대치
    gasPrice : 보내는 사람이 지불할 가스 가격
    data : 트랜잭션에 담을 제이터
    비트코인 네트워크와 다른 점 / 이더리움 네트워크는 가스비(gas fee)라는 개념이 있고
    가스는 이더리움 네트워크에서 트랜잭션을 생성할 때 보내는 사람이 부담하는 수수료의 개념

    Web3 라이브러리를 사용하면 노드간의 통신을 할 때
    RPC라는 개념
    RPC라는 개념이 나온 이유(분산 네트워크)
    분산 네트워크를 프로그래밍으로 쉽게 어떻게 해야할까

    일반적으로 통신 패턴은
    서버를 켜고
    클라이언트에서 서버에 데이터나 행동을 요청
    서버는 그 데이터를 받고 요청받은 응답을 반환해주고
    클라이언트는 서버로부터 응답값을 받아서 본인의 요청을 결과로 받을 수 있다.
    http socket


    프로시저란?


    RPC는 원격 프로시저 호출 별도의 원격 제어를 위한 코딩없이 다른 주고 공간에서 
    함수나 프로시저를 실행할 수 있게 하는 프로세스간 통신기술
    원격 프로시저를 호출하면 프로그래머가 함수를 실행 프로그램에 로컬 위치에 원격 위치에 있든 
    코드위 위치에 상관없이 동일한 코드를 이용할 수 있다.

    함수는 input에 대한 output의 발생을 목적으로 하고 
    프로시저는 결과보다는 명령 단위가 수행하는 절차를 목적으로 한다. // 코드를 실행하게 하는 매니저같은 것
        => 결과값이 어떻든 일단 코드를 실행하게 함


*/




// =================== 11-17일자
/*
// 가나쉬에서 curl을 사용해서 요청을 보내고 확인하는 법
// curl은 client URL

// 클라이언트에서 소스 코드를 손 쉽게 웹 브라우저처럼 활용 할 수 있게 해주는 기술
// 서버 통신 할 수 있는 커멘드 명령어 툴이다. 웹 개발에서 많이 사용되는 기술
// 장점은 다양한 프로토콜을 지원 한다는 장점이 있다.
// DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, SSL 등등

// URL을 가지고 할 수 있는건 웬만하면 다 할 수 있다라고 보면 된다.
// HTTP 프로토콜을 사용해서 페이지의 데이터를 가져온다거나 파일을 다운 받을 수도 있다.
// curl [-option] 페이지 주소 쓰면 페이지의 소스가 화면에 출력된다.

// npx ganache-cli로 가나쉬 실행 시켜 놓고
// curl -X POST -H "content-type : application/json" --data "{id : juyeong}" http://localhost:3000

// -X 요청 메소드
// -H 요청 헤더 내용
// -data. -d 요청 바디 내용 작성

// 가나쉬로 생성한 이더리움 클라이언트에
// curl을 사용해서 RPC요청을 보내보자
// request body의 내용
// {
//  "id" : 1215 // 체인의 아이디, 있어도 되고 없어도 된다.
//  "jsonrpc" : "2.0" //  json으로 인코딩한 프로시저 호출 // 필수
//  "method" : "eth_accounts", // 이더리움 클라이언트에 구성되어 있는 메소드 명 // 필수
//  "params" : [] // 메소드의 인자 값
// }

// 계정을 가져오기
// curl -X POST -H "Content-type : application/json" --data '{ "jsonrpc" : "2.0", "method" : "eth_accounts", "params" : [] }' http://localhost:8545

// curl -X POST -H "content-type : application/json" --data '{"jsonrpc" : "2.0","method" : "eth_accounts"}' http://localhost:8545
// curl -X POST -H "content-type : application/json" --data "{\"jsonrpc\" : \"2.0\",\"method\" : \"eth_accounts\"}" http://localhost:8545

    =====잔액 조회하기

    잔액을 조회하는 함수 이름은 "eth_getBalance"
    "eth_getBalance" 함수는  params로 매개변수 2개를 전달하고 
    첫번째에는 계정의 주소
    두번째는 몇번째 블록을 조회할 것인지

    curl -X POST -H "Content-type:application/json" --data '{"jsonrpc" : "2.0","method" : "eth_getBalance", "params" : ["내 주소 넣기","latest"]}' http://localhost:8545
    내 주소는 wsl에서 계정 가져오기 했을때 result부분에 있는 계정주소중 하나를선택하면 된다.


    curl -X POST -H "Content-type:application/json" --data '{"jsonrpc" : "2.0","method" : "eth_getBalance", "params" : ["0x8e25dc531d5464d755e2a228aafab002a52da928","latest"]}' http://localhost:8545



    결과 : {"jsonrpc":"2.0","result":"0x56bc75e2d63100000"}root@DESKTOP-VG3TM4M:/mnt/c/Windows/system32#
    이렇게 뜨는데 잔액은 "result":"0x56bc75e2d63100000" 이것이다 16진수임


    이더리움 클라이언트에게 RPX를 요청보내는 방법이다.

    WEB3 라이브러리
    Web3.js라는 라이브러리를 제공받아서 이더리움 네트워크와 상호작용을 할 수 있는 다양한 함수를 제공받아 사용할 수 있다
    위에서 해본 RPC요청을 쉽게 보낼 수 있게 해주는 라이브러리


    프로젝트에다가 설치 하기
    =======================
        npm init -y
        npm install -D jest
        npm install web3
    =======================


    package.json에서 수정하기
    "test" : "jest"
    그다음
    jest.config.js 파일생성



    // ethereumjs-tx 라이브러리 설치

    npm install ethereumjs-tx
*/