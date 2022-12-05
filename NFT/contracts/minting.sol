// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import 를 하는데 nodemodules/openzepplin//contracts/token/ERC20 을 가져와주자
// 리믹스는 노드모듈 을 알아서 찾아주기 때문에 지우고 컴파일하면
import 'openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract Minting is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){

    }

    function _minting(uint _tokenId) public{
        _mint(msg.sender, _tokenId);
        // _tokenId 키값 조회 하면 누가 토큰의 소유자 인지 확인 가능
        // _tokenId : 토큰의 고유 값, msg.sender 토큰을 받는 계정
    }

    function tokenURI(uint) public override pure returns (string memory){
        return "https://gateway.pinata.cloud/ipfs/QmYaq7vd72H8hkjxW3yyiCXKFyF6fjwooPvJXVL3odFiHA";
        // 반환값은 우리가 만들어서 넣어줄 json 객체
        // view : 읽기만 가능
        // pure : state값을 변경 할 수 없다. 이 함수 밖에 있는 값을 읽어올 수도 변경할 수 도 없음 

        // nft 객체의 내용
        // {
        //     "name" : "이름",
        //     "description" : "설명",
        //     "image" : "이미지의 경로",
        //     "attribute" : ["속성 값"]
        // }
    }
}
