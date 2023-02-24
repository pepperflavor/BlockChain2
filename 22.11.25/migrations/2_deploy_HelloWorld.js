const helloWorld = artifacts.require("HelloWorld");
// artifacts.require : 스마트 컨트랙트 계정 정보 읽어오는 코드
// 매개변수로는 위와 같이 컴파일된 json 파일명을 넣어주면된다!

module.exports = function (deployer) {
  // deployer : 트러플이 제공해주는 배포를 위한 툴
  // deployer.deploy : 함수의 매개변수로 읽어온 계약정보(HelloWorld.json파일에서 읽어온 계약정보)
  deployer.deploy(helloWorld);
};
