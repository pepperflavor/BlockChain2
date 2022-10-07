const express = require('express');
const cors = require("cors");
const { sequelize, user } = require('./public');
const app = express();



// 프론트에서 이걸 가져가려면 cors 에러를 해결해야함
app.get('/', (req, res)=>{
    res.send('안녕')
})

/*  cors 에러 해결방법
    콘솔창에 'Access-Control-Allow-Origin' header is present ~~
    에러가 나면 cors 설정을 해주어야 한다

    cors란 브라우저 보안 정책
    cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청했을 때 발생한다
    //-===================
            cors 설치
            npm i cors
    //-===================
*/

/*
    app.use(cors({
        origin : '*' // 누가 오든 요청허용
        origin : true //들어오는 요청 도메인/포트가 자동으로 origin에 들어간다
        origin : '도메인', // 실제로 서비스 되는 도메인을 입력해줘서 해당 도메인만 접근할 수 있게 허용한다
        credential : true, false (사용자 인증이 필요한 리소스를 접근 허용해줄지 안할지 쿠키 같은 것 등등)
    }))
*/ 
sequelize.sync({force : false}).then(()=> {
    console.log('연결이 잘 되었다');
}).catch((err)=>{
    console.log(err);
})

const options = {
    // 허용해줄 url 설정
    origin : 'http://localhost:3000' // 이 주소를 허용해준것
    // 이곳에 도메인을 넣어주면 된다. 지금은 로컬에서 작업중이기때문에 localhost를 넣어준것
}

// 전달받은 객체 형태를 해석해서 사용할 수 있다
app.use(express.json())
app.use(cors(options));


app.post("/login", async (req, res) => {
    let { id, pw } = req.body;
    const users = await user.findOne({
      where: { user_id: id, user_pw: pw },
    });
      if(users){
        res.send(true);
      }else{
        res.send(false);
      }
});


// 회원가입
app.post('/signUp', async(req,res)=>{
    console.log(req.body);
    let {id,pw} = req.body;
    const users = await user.findOne({
        where : {user_id : id, user_pw : pw}
    });
    if(!users){
        user.create({
            user_id : id, user_pw : pw
        }).then(()=>{
            res.send('가입완료!')
        })
    }else{
        res.send('이미 존재하는 아이디 입니다.')
    }
})

app.listen(8000,()=>{
    console.log('서버 열림')
})