// txOut 객체를 만들 클래스 

export class TxOut implements ITxOut {
    public account : string; // 보낼 주소
    public amount : number; // 보낼 코인
    constructor(account : string, amount : number){
        this.account = account;
        this.amount = amount;
    }
}