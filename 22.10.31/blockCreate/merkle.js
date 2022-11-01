const merkle = require('merkle');
// Merkle tree는  block에 포함 트랜잭션들을 나무 형태로 요약한 것

const data = ['1234', '4568', '7895444', '1231235', '123156']

/*  머클트리
모클트리는 비트코인과 다른 암호화폐에 필수적인 요소 블록헤더에 있는 각 블록들의 필수 요소이고 데이터들을 해시화해서 더한 후 해시화를 반복해서 트리처럼 뻗어 마지막 루트 해시값을 구한다
머클 루트가 처리하는게 암호화폐의 마이닝과 트랜잭션 검증
*/

const merkleTree = merkle('SHA256').sync(data);
const Root = merkleTree.root();
console.log(Root);