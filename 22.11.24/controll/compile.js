const solc = require("solc");

// 기존엔 fs를 사용했었음. fs-extra: node fs 모듈에 없는 추가적인 file 시스템 함수를 사용할 수 있다. 종합버전으로 보면됨
const fs = require('fs-extra');
const path = require('path');

class Contract{
    static compile(_filename){
        const contractPath = path.join(__dirname, "../contracts", _filename) // 절대경로로 접근
        const source = fs.readFileSync(contractPath, "utf-8");
        let solcInput = {
            language : "Solidity",
            sources : {
                contract : {
                    content : source
                }
            },

            settings : {
                optimizer : {
                    enabled : true
                },
                outputSelection : {
                    "*":{
                        "*": ["*"],
                    },
                },
            },
        }
        solcInput = JSON.stringify(solcInput);
        //console.log(solcInput);
        // compile : sol 파일을 컴파일 해주는 함수
        let contractObject = solc.compile(solcInput);
        contractObject = JSON.parse(contractObject);
        console.log(contractObject);

        for (const key in contractObject.contracts) {
            const contractName = "HelloWorld";
            const contract = contractObject.contracts[key][contractName];
            const abi = contract.abi;
            const bytecode = contract.evm.bytecode.object;
            const obj = {abi, bytecode}
            const _path = path.join(__dirname, "../upload", `${contractName}.json`)
            fs.outputJSONSync(_path, obj);
            return [abi, bytecode];
        }
    };
    
}
Contract.compile("test.sol");
module.exports = { Contract };