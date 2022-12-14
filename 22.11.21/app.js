// private network
// 가상 사설망 이란 뜻인데
// 회사 조직에서 독립적으로 사용하는 네트워크로 보면 되고
// geth 

// 우분투 폴더 경로 접속
// ----------------------------
// \\wsl$ 로 경로로 직접접속
// root 폴더가 안들어가지면
// 경로상에 /mnt/c/WINDOWS/system32#
// mnt폴더의 밖으로 이동 cd .. 쭉이동해서
// root 폴더 확인하고 ls -a로 확인하고
// sudo chmod 777 -R root
// ----------------------------

// Looking for peers 이더리움 네트워크상 다른 노드와 peer를 맺어주기 위해
//peer 맺으면 이더리움 네트워크 상에 있는 데이터들을 로컬에 다운 받을 수 있다.
// 다운받은 내용은 
// MacOs는 ~/Library/Ethereum
// Linux는 ~/.ethereum  **************

// 기본적으로 chaindata 폴더와 keystore 폴더를 확인해보면
// chaindata 폴더 : 블록 헤더 내용, 블록의 바디 트랜잭션 내용이 들어있다.
// keystore 폴더 : geth에서 관리하는 계정들의 정보가 들어있따.

// 이런 내용을 geth로 다운 받은 것을 동기화라고 부르고

// full sync, fast sync, light sync이렇게 3가지가 있고
// full sync : 제너시스 블록 부터 지금 현재 블록 까지 모든 블록을 동기화
// fast sync : 블록 헤더 정보 동기화, 블록 바디 마지막 트랜잭션 기준 -1024개의 트랜잭션 데이터만 동기화
// light sync : 블록 헤더 정보와 마지막 snapshot 동기화

// 이렇게 있고 아무 옵션 없이 geth를 실행할 경우
// 디폴트 값이 fast sync가 되고 light sync로 실행 하고 싶으면
// -------------------------------
// geth --syncmode light
// -------------------------------

// light sync 동기화 할때는 lightchaindata폴더에 값이 저장된다.

// IPC 프라이빗 네트워크를 구축하면서 IPC 개념을 알고 가자
// IPC는 프로세스 간 통신
// 프로세스끼리 서로 데이터를 전송 수신하는 행위 또는 그 방법을 말하는 것 

// IPC의 종류
// 메세지 전달, 메모리 공유

// 메세지 전달은 커널이 제공하는 API를 사용해서 커널 공간을 통해서 통신하고 
// 소켓 로컬에서도 통신이 가능하다

// 메모리 공유
// 프로세스끼리 공통의 메모리 영역을 공유하고 상호간 통신 하는 방법
// 데이터 자체를 공유하도록 지원한다.

// 간단하게 IPC는 실행중인 프로세스 간에 데이터를 주고 받는 것 
// 프로세스는 할당된 메모리 내의 정보에만 접근 할 수 있게 해주고
// 이를 벗어나서 접근할 경우 오류를 발생 시키는데
// 안정성을 위해서 운영 체제가 자기 프로세스의 메모리에만 접근하도록 하고 있기 때문에 이런 부분들 때문에 우리가 IPC를 사용해서 다른 프로세스 간에 데이터를 주고 받아야한다.

// geth.ipc 파일을 사용해서 geth와 IPC 통신을 할 수 있게 된다.

// 터미널을 하나 더 열어서 

// 통신을 하는 명령어
// wsl 새로 접속후 다음 명령어
// ------------------------------------------------
// geth attach ~/.ethereum/geth.ipc
// ------------------------------------------------
// 자바스크립트 콘솔창에 접속이 되고 go언어로 만들어 놓았고
// 자바스크립트로 호출 해서 사용할 수 있게 끔 만들어 놓은것.

// personal 모듈 중 하나이다.
// personal을 콘솔에 입력 
// 속성과 메소드 등등이 쪽 보이게 된다
// 이것들이 자바스크립트로 호출 할 수 있게 끔 만들어 놓은것

// admin
// 1. admin.nodeinfo : 노드의 정보 조회
// 2. admin.nodeinfo.enode : enode 값을 이용해서 peer를 맺는다.
// 3. admin.datadir : admin 관련 데이터의 폴더 경로

// personal
// 1. personal.newAccount : 계정 생성

// eth
// 1. eth.syncing : 동기화 여부 확인(true, false 값으로 구분)
// 2. eth.chainId : 체인 ID 조회
// 3. eth.accounts : 노드에 존재하는 계정 확인
// 4. eth.coinbase : 코인베이스 계정(마이너 계정)

// web3
// web3.fromWei(eth.getBalance(account), "ether") : 웨이 -> 이더로 단위 변환

// private network 구축

// geth를 실행해보면 Chain ID: 1(mainnet) 구분이 보이는데
// geth가 실행되고 있는 이더리움 메인넷 Chain ID : 1 (mainnet)에 연결된 노드로 동기화가 이루어 지고 있다.
// private network를 만드는데 geth의 기능은 사용하지만 최초블록을 교체해서
// 자체적인 프라이빗 네트워크를 구축할 것.

// json으로도 제네시스 블록의 속성값을 지정해줄 수 있다.

const genesis = {
    // nonce 값을 발견할 난이도 설정
    "difficulty" : "200000",
    // 블록체인 블록당 가스 제한량
    "gasLimit" : "3100000",
    // 제네시스 블록 생성시 지정한 지갑에 할당된 양의 정보
    "alloc" : {},
    "config" : {
        // 블록체인 네트워크 체인 아이디
        "chainId" : 1234,
        // 이더리움 release 버전
        "homesteadBlock": 0,
        // eip는 Ethereum Imporvement Proposal을 의미하고
        // 적용할지 여부를 확인 할 수 있다. 기본값 0
        "eip150Block" : 0,
        "eip155Block" : 0
        // eip는 이더리움 개선안 
        // 이더리움 커뮤니티 구성원들이 추진하는 이더리움 암호화폐
        // 스마트 컨트랙트의 발전을 위해 제안하는 것 
        // 
    }
}

// wsl 접속하고
// 경로를 cd ~/ 루트로 이동후
// geth가 설치 되어있는 곳으로 이동 .ethereum 폴더로 이동
// cd .ethereum/

// geth --datadir node init genesis.json
// 실행 명령어
// geth --datadir node 
// 실행후 새 cmd에서 작업

/*
    Peppeth는 이더리움 노드 배포를 쉽게 도와주는 프로그램
    geth를 빌드해서 실행 부터
    make geth로 빌드를 했었고
    make all 빌드를 할거다
    make all의 명령어를 사용하면 geth이외에 go ethereum의 모든 파일도 빌드 된다
    이 make all 빌드를 하면 폴더안에 Puppeth이 생성이 되는데
    Puppeth를 사용할 거고 사용하는 이유는
    최초 블록 속성 설정이나 여러가지 유용한 부분이 많기 때0문에
    초기 설정을 도와주는 프로그램으로 생각하면 된다.
    초기 세팅값을 사용하려고 쓰는것

    폴더 경로를 go-ethereum 폴더로 이동해서
    make all

    사설 이더리움 네트워크 생성한 것

    puppeth 실행하고
    설정 값 다 설정하고 파일명이 root에 .peppeth 폴더에 설정한 
    파일 이름으로 json 생성

    json 파일을 가지고 geth 생성하기
    geth --datadir node init "json 경로"

    만약 .puppeth 폴더로 들어가면 경로는 안써줘도 된다!
    실행 명령어 
    그 경로 그대로에서
    geth --datadir node 로 실행하기



    web3 통신하고
    IPC를 사용해서 로컬에 실행시킨 geth 프라이빗 네트워크를
    블록체인 네트워크에서 메타마스크나 다른 pc와 통신하려면 설정이 필요한데
    geth를 실행할 때 옵션을 설정해 주면 된다.

    설정 명령어
    --------------------------------------------------------------------
        --http.addr"0.0.0.0" : 모든 ip허용
        --http.port 8000 : 사용할 포트를 8000으로 설정
        --http.corsdomain"*" : cors설정 모든 도메인 허용
        --http.api"admin, txpool,web3" : 외부에서 어떤 모듈을 사용할 수 있게 설정할 것인지
        --syncmode full : 동기화 모드 full
        --networkId : chainId 체인 아이디와
    --------------------------------------------------------------------


    실행 명령어
    --------------------------------------------------------------------
    geth attach http://127.0.0.1:8000 이 명령어가 안된다면
    geth --networkid 7722 console 2 --rpc --rpcport 8000 --rpcaddr 127.0.0.1
    --------------------------------------------------------------------
    
    geth --datadir ./myDataDir --networkid 1114 console 2 --rpc --rpcport 8000 --rpcaddr 127.0.0.1
    --------------------------------------------------------------------


    프라이빗 네트워크에서 통신할 수 있는 상태가 된것이고
    nodejs나 메타마스크 프라이빗 네트워크에 통신하는것이 가능한 상태가 되었다.
    
    npm init -y로 package.json 만들고
    테스트 코드 작성으로 jest 사용
    ==================================================
        npm install jest
    ==================================================


    통신을 사용 해야하니까 web3 설치
    ==================================================
        npm install web3
    ==================================================


    .puppeth 폴더에 들어간 후 
        geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
    --http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 7722 
    명령어 실행 해야함
    명령어 실행한 다음

    터미널에 wsl 하나 더 연다음
    geth attach http://127.0.0.1:9000
*/

/*
    코인 베이스 계정으로 채굴하기

    코인 베이스 계정을 마이너로 설정
    -----------------------------
    miner.setEtherbase(eth.accounts[0])
    -----------------------------
    
    
    -----------------------------
    miner.start(1); start(갯수는 스레드 개수);
    -----------------------------
    스레드는 일해주는 인력이 많다

    마이닝 스탑
    -----------------------------
    miner.stop()
    -----------------------------
    
    코인 베이스 계정의 채굴한 잔고 확인 해보기
    -----------------------------
    eth.getBalance(eth.accounts[0])
    -----------------------------
    
    -----------------------------
    web3.fromWei(eth.getBalance(eth.accountd[0], "ether"))
    -----------------------------

    코인 베이스 계정의 잔고에서 트랜잭션을 보내서 잔고를 보내보자
    eth.sendTransaction({from : eth.accounts[0], to : eth.accounts[1], value : web3.toWei(10)})
    ***** HTTP 액세스를 통한 계정 잠금 해제는 web3.js:6365:9(45)에서 금지되어 있습니다. ***** 라는 오류가 뜸
    그래서 geth를 실행할때 설정 해줘야 할게 있다.

    계정 잠금 해제하고 실행
    geth --datadir node --http --allow-insecure-unlock --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
    --http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 7722

    실행한 다음 eth.accounts 로 계정 있나 확인
    코인 채굴해놓고 계정 잔고 확인한 다음
    personal.unlockAccount(eth.coinbase) || personal.unlockAccount(eth.account[0]) 이렇게 써도된다


    트랜잭션을 보내면 txpool 트랜잭션 풀에 먼저 들어오고
    아직 트랜잭션이 pending 상태로 들어있고
    마이닝을 실행하면 트랜잭션 풀에서 트랜잭션이 처리가 된다.


    특정 계정 unlock 시켜주기
    ** networkid 내걸로 바꿔야함(7722 맞음)
    ** 비밀번호 파일 : .puppeth에 설치해놓은 node 폴더에 비밀번호를 적어 놓은 txt 형식 파일을 생성

    geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
    --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 7722\
    --port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*" \
    --ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \
    --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"

    자바 스크립트 콘솔창에
    bytecode = "0x" 뒤에 솔리디티로 컴파일한 bin 파일의 내용을 붙여 넣어준다
    자바스크립트 콘솔창에서 bytecode 변수에 값을 할당

    abi = 솔리디티로 컴파일한 abi 파일의 내용을 붙여 넣어준다
    자바스크립트는 콘솔창에서 abi 변수에 값을 할당

    트랜잭션 객체를 만들어준다
    from 키값과 data 키값으로 객체를 생성해준다
    txObject = {from : eth.coinbase, data : bytecode};
    eth.sendTransaction(위에서 만든 트랜잭션 객체 txObject)
    
    그다음 miner.start(1) 로 트랜잭션 블록으로 캐기
    stop 한다음 txpool로 블록으로 캤는지 확인 할 수 있다.

    그다음

    eth.getTransaction(트랜잭션의 해쉬값 문자열 그대로)

    =====================================================================================================
    +) 포트번호 30300란??
    TCP 포트 30300은 전송 제어 프로토콜을 사용한다. TCP는  TCP/IP 네트워크의 주요프로토콜중 하나이다.
    TCP는 연결 지향 프로토콜이며 종단간 통신을 설정하려면 핸드쉐이킹이 필요합니다. 연결이 설정된 경우에만 사용자 데이터를 
    연결을 통해 양방향으로 보낼 수 있습니다.
     UDP 포트 30300 은 TCP로 통신을 보장하지 않습니다. 포트 30300 의 UDP 는 신뢰할 수 없는 서비스를 제공하며 
     데이터그램이 예고 없이 복제되거나 순서가 바뀌거나 누락되어 도착할 수 있습니다. 
     포트 30300 의 UDP 는 오류 검사 및 수정이 필요하지 않거나 응용 프로그램에서 수행되지 않는다고 생각하여 
     네트워크 인터페이스 수준에서 이러한 처리의 오버헤드를 피합니다.
    UDP(사용자 데이터그램 프로토콜)는 최소 메시지 지향 전송 계층 프로토콜입니다(프로토콜은 IETF RFC 768에 문서화되어 있음).
    =====================================================================================================



    복습 =============================================
        wsl 창 두개 열고
        1. cd ~로 최상단 이동 .puppeth들어간 다음
        geth --datadir node init

        geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
        --http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 7722 로 계정 잠금 해제

        geth --networkid 7722 console 2 --rpc --rpcport 8000 --rpcaddr 127.0.0.1
        킨 다음 
        계정 확인 -> 명령어는 위에 참고


*/