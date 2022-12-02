const Token = artifacts.require('Token');

module.exports = function(deployer){
    // Test의 배포가 되기전에
    // constructor의 매개변수가 전달되어야 한다.
    // constructor의 매개변수가를 전달하기 위해서
    // deploy함수의 두 번째 인자로 추가 해주면 된다.

    deployer.deploy(Token)
}