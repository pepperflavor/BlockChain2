// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './ERC20.sol';

// 컨트랙트 상송 is로 SOONToken에 REC20를 상송
contract SOONToken is ERC20{
    address public owner;
    uint256 public ethCanBuy =200;// 1TH당 200토큰

    constructor(string memory _name, string memory _symbol, uint256 _amount){
        //ERC20 상속 받아서 있는 것 갖다 씀
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        //mint 함수 만들예정
        mint(_amount * (10 ** uint256(decimals)));
    }

    // 익명함수
    // receive : 특정 계정에서 CA에 이더를 전송했을 때 실행되는 함수
    // external 이 있다는 건 이 컨트랙트 자체에서 실행하지 않는다.
    // 선언해둠
    receive() external payable {
        // require true면 실행 false면 종료
        // require true면 실행
        require(msg.value != 0);
        uint amount = msg.value * ethCanBuy;

        // require true면 실행
        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        // 발행지가 CA로 전송한거면 발행량 늘려주는 것
        if(msg.sender == owner){
            mint(amount);
        }

        emit Transfer(owner, msg.sender, amount);
    }
}