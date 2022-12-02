const SOONToken = aetifacts.require('Toekn');

module.exports - function (deployer){
    deployer.deploy(SOONToken, "Token", "STK", 10000);
}