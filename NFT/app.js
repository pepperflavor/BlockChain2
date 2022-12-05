// ERC20 토큰을 사용해봤고 NFT를 발행할때는
/*
    ERC721 토큰을 사용해서 민팅한다.

    ERC20토큰은 그냥 갯수가 있는 토큰이라 보면 되고
    "계정" : 200
    {
        "0xasfsfgdfgfg" : 200
    }


    ERC721토큰은 대체 불가 토큰
    고유값 : "계정"

    {
        "12(tokenId)" : "0xasdsdsdg"
    }

    ERC721 토큰
    토큰에 고유값이 있고 그 토큰의 주인이 누구인지

    
    Remix
    스마트 컨트랙트를 쉽게 작성하고 배포를 하게 도와주는 툴


    트러플 초기화
    npx truffle init


    @remix-project/remixd 설치
    ================================================
    npm install -g @remix-project/remixd
    ================================================


    터미널에 있는 폴더부터 remix에 연결됨
    contracts 폴더로 이동을 해서 실행 명령어
    remixd -s . --remix-ide https://remix.ethereum.org


    실행명령어 친다음 다음 주소로 접속
    https://remix.ethereum.org/

    오픈 제플린 설치
    ERC721 토큰 표중 사용하기 위해서
    npm install openzeppelin-solidity


    코드 작성하고

    pinata가서 이미지 등록하고 이미지 주소 test.json 만든거에 넣고
    json도 올려서 jsondml url 갖다가 minting 함수 return에 넣어준다

    remix가서 localhost로 연결하고 compile 함
    그다음 배포하고

*/