const {Contract} =require('./controll/compile');
const {Client} = require('./controll/client');

const [abi, bytecode] = Contract.compile('test.sol')
const client = new Client("ws://127.0.0.1:9005");


const contract = new client.web3.eth.Contract(abi);
//console.log(contract);
const txObject = {data : bytecode};

const Address = "0x6f7a1da0fc1649d869aa848b672ac4d7676fd339";

async function init(){
    // deploy : 반환값이 promise 객체
    // 트랜잭션이 처리 될때까지 기다린다
    const instance = await contract.deploy(txObject).send({from: Address})
    /*
        배포하고 메소드를 가져와야하는데
        필요한게 contract Address
        instance 객체 안에 options.address에 contract address가 들어있다.
    */ 
   //console.log(instance.options.Address);

}

init();

const CA = "0x20c28F4010E76d304eEcE78EF6ab2dA99e8a2887";
console.log(CA);
// CA = 0x20c28F4010E76d304eEcE78EF6ab2dA99e8a2887

// 컨트랙트 조회해서 함수와 변수 가져오기
// 필요한게 abi와 contract address
const deployed = new client.web3.eth.Contract(abi, CA)

   // getter로 value값 가져옴
    deployed.methods.value().call().then((data) => {
        console.log("ss  :  ",data);
    });

    deployed.methods.setValue("ddssssdsdsdsd").send({from: Address}).then((data) => {
        console.log( "ffff  :  ", data);
    })