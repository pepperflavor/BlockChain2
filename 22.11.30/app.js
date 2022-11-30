/*
    사과 판매 앱 만들기
    스마트 컨트랙트 함수의 payble 속성
    솔리디티 언어는 코인이나 토큰을 즉 가상화폐를 다루는 언어이고
    다른 언어들은 프로그램을 개발하는데 사용하지만 솔리디티는
    가상화폐라는 돈을 가지고 사용하기 위해 사용하는 언어

    솔리디티로 이더를 전송하는 스마트 컨트랙트를 작성 하기 위해서는
    payble을 작성한 함수에서만 이더를 보낼 수 있다.
    
    먼저 트러플 init
    npx truffle init

    truffle-config.js 설정


    contracts에 AppleShop.sol 파일 만들고
    리액트 설치

    npx create-react-app "이름"

    설치하면서 migrations 폴더에 2_deploy_AppleShop.js 만들고 내용작성

    리액트 설치가 끝나면 필요없는 것 제거

    src에 hook 폴더 만들고 useWeb3.js만들기
    리액트 폴더 경로로 이동 후 
    web3 라이브러리 설치
    
    ================================
        npm i web3
    ================================

    트러플 컴파일
    경로확인하고 리액트 밖으로
    npx truffle compile


    가나쉬 켜서 마이그레이션
    npx ganache-cli
    npx truffle migration


    다됐다면 
    src에 contracts 폴더 만들고 컴파일된 AppleShop.json 복사 붙여넣기
    src에 components 폴더 만들고 AppleShop.js 만들기


    AppleShop.js 컴포넌트

*/