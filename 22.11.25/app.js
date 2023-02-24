/*

트러플을 사용해서 이더리움 디앱 개발을 쉽게 할 수 있다
트러플이 Dapp개발을 하는데 도와주는 블록체인 프레임 워크
블록체인에서 스마트 계약을 컴파일하고 배포할 때 복잡한 구조를 추상화 시켜주는 역할
트러플을 스마트 컨트랙트를 쉽게 배포할 수 있게 도와준다
트러플에서는 web3 라이브러리를 사용한다

package.json 만들고
npm init -y

트러플 설치
npm install truffle

트러플 버전 확인
npx truffle version

트러플 초기화 설치
npx truffle init

초기화를 하면 .gitkeep이 생기는데 이건 사용자가 만든 빈 파일이다!
빈 폴더를 유지한다. 빈 폴더를 커밋한 것!

트러플 폴더들
contracts : 스마트 컨트랙트 코드를 작성하는 폴더
migration : 배포 관련 코드를 컨트랙트별로 모르는 폴더
test : 스마트 컨트랙트 테스트 코드 작성하는 폴더
truffle-config.js : 트러플 환경 설정 파일 컴파일 하는 솔리디티 버전
build : 솔리디티 코드를 컴파일한 내용을 가지고 있는 json 파일들이 있는 폴더(HelloWorld.sol 파일을 만들었는데 컴파일 하는 명령어를 치니까 build 폴더에 HelloWorld.json 파일을 생성해줌!)

스마트 컨트랙트 코드를 컴파일하는 명령어
npx truffle compile 

컴파일된 파일로 스마트 컨트랜트 배포하기!
어떤 네트워크에 배포를 할 지 truffle-config.js를 수정해서 네트워크 설정해주면된다

geth 네트워크를 실행시켜주고
migrations 폴더에 배포 관련 코드를 작성한 파일을 만들어주자.
2_deploy_HelloWorld.js 이 파일이 배포 관련 코드를 작성한 파일!!

배포 관련 코드를 작성한 파일의 이름은
[번호] [내용] [컨트랙트 이름].js 형식으로 만들어주어야한다!

배포 명령어
npx truffle migration

배포한 컨트랙트 확인
트러플 콘솔창을 사용해서 명령어로 확인

트러플 콘솔창 실행 명령어
npx truffle console

배포한 컨트랙트 CA 확인
HelloWorld.address

배포된 스마트 컨트랙트 콘솔창에서 실행
HelloWorld.deployed().then(instance => hello = instance)

hello 변수에 instance를 넣고
hello를 가지고 스마트 컨트랙트로 배포한 함수나 변수를 조회할 수 있다
hello.address CA 확인가능
hello.value.call() 상태변수 확인 가능

setValue 함수를 호출 후 실행해서 트랜잭션을 발생 시키고 txpool에 담겨있는 트랜잭션을 처리해서 확인

hello.setValue('jinny')를 입력해준 후
hello.value.call() 다시 확인해보면 상태변수가 hi 에서 jinny로 바뀌어있는 것을 볼 수 있다

test 폴더에는 test 코드를 작성해서 돌아가는지 확인해볼 수 있음

*/
