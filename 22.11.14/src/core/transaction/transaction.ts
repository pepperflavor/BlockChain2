// transaction 객체 생성 클래스

import { TxIn } from "./txin";
import { TxOut } from "./txout";
import { UnspentTxOut } from "./unspentTxOut";
import { SHA256 } from "crypto-js";


export class Transaction implements ITransaction{
    public hash: string;
    public txIns: TxIn[];
    public txOuts: TxOut[];
    constructor(txIns: TxIn[], txOut : TxOut[]){
        this.txIns = txIns;
        this.txOuts= txOut;
        this.hash = this.createTransactionHash();
    }
    // static
    // 인스턴스 생성하고 만들어 진다.
    createTransactionHash() : string {
        // 배열의 value를 뽑아서 하나의 문자열로 
        const txoutContent : string = this.txOuts.map((v)=> Object.values(v)).join("");
        const txinCountent : string = this.txIns.map((v)=>Object.values(v)).join("");

        // 트랜잭션의 해시값을 만들어주고
        return SHA256(txoutContent + txinCountent).toString();
    }

    createUTXO() : UnspentTxOut[] {
        // 
        const utxo : UnspentTxOut[] = this.txOuts.map((txout : TxOut, index : number)=>{
            return new UnspentTxOut(this.hash, index, txout.account, txout.amount);
        })

        return utxo;
    }
}
