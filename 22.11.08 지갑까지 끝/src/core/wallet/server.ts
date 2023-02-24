// 지갑 서버

import express from "express";
import nunjucks from "nunjucks"
import { Wallet } from "./wallet";
import axios from "axios";
import path from "path";

const app = express();

// -------------------------------------
// npm i nunjucks
// npm install @types/nunjucks
// -------------------------------------

// -------------------------------------
// npm i axios
// npm install @types/axios
// -------------------------------------

nunjucks.configure("view", {
    express : app,// express 속성에 우리가 만든 express 연결해준것
    watch: true // watch 옵션은 true면 html파일이 변경되면 템플릿 엔진이 리로드 시켜줌
})
app.set("view engine", "html");

// axios 사용할때 디폴트값 세팅
// 
const baseURL = "http://localhost:3000";
const baseAuth = Buffer.from('soon' + ":" + "1234").toString('base64');
const request = axios.create({
    baseURL,
    headers : {
        // api 서버에서 데이터를 요청 응답할때 http Authorization 헤더에
        // 유저의 아이디와 비밀번호를 base64형태로 인코딩한 문자열을 추가해서 
        // 인증하는 방식 base64로 인코딩 되어 전송 되기 때문에 
        // 중간에 공격 취약하기는 하다..
        Authorization : "Basic " + baseAuth,
        "Content-type" : "application/json"
    }
});

app.use(express.json());

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/newWallet',(req,res) =>{
    res.json(new Wallet());
})

app.listen(4000,()=>{
    console.log('서버 4000번에 열렸다.')
});