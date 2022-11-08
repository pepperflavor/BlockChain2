// 지갑 서버

import express from "express";
import { Wallet } from "./wallet";
import axios from 'axios';
import ejs from "ejs";


const nunjucks = require('nunjucks');
const app = express();

/*
=============================================
    npm i ejs
    npm install @types/ejs
=============================================

=============================================
    npm i axios
    npm istall @types/axios
=============================================
*/

// app.set("views", path.join(__dirname, "views"));
// app.engine("html", ejs.renderFile);
nunjucks.configure("view", {
    express : app, // express 속성에 우리가 만든 express 연결해준 것
    watch : true,
})
app.set("view engine", "html");


//
const baseURL = "http://localhost:3000";
const baseAuth = Buffer.from('soon' + ":" + "1234").toString('base64')
const request = axios.create({
    baseURL,
    headers : {
        // api 서버에서 데이터를 요청응답할 때 http Authorization 헤더에
        // 유저의 아이디와 비밀번호를 base64형태로 인코딩한 문자열을 추가해서
        // 인증하는 방식, base64로 인코딩되어 전송되기 때문에
        // 중간에 공격 취약하기는 하다
        Authorization : "Basic " + baseAuth,
        "content-type" : "application/json"
    }
})

app.use(express.json());

app.get('/',(req, res)=>{
    res.render("index");
})

app.post('/newWallet', (req, res)=>{
    res.json(new Wallet())
})
app.listen(4000, ()=>{
    console.log('서버 4000번에 열렷다');
    
})