// txIn 객체를 생성해줄 클래스

export class TxIn implements ITxIn{
    public txOutId : string;
    public txOutIndex : number; // 배열의 인덱스 값 (첫 트랜잭션의 경우 블록의 높이)
    public signature?: string ; // 첫 트랜잭션은(코인베이스 트랜잭션) 서명이 없으니 undefined도 같이 설정 
    constructor(txOutId : string, txOutIndex : number, signature: string | undefined) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.signature = signature;
    }
}