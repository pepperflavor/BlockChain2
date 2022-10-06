import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import { weather, Logins } from "./middleware";

/*  Get 요청방식
    axios({url : ''});
*/

/*  POST 요청방식
  디폴트가 get이기 때문에 post방식은 설정을 해줘야함
*/
// axios({
//   method : 'post',
//   url : '',
//   data: {
//     // 넘겨줄 값을 넣어주면 된다.
//   }
// })

function App() {

  const dispatch = useDispatch();
  // async function getWeather(){
  //   const data = await axios({ url : " https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9a8b5f3549350c3a377b146d8b970339" });
  //   console.log(data);
  // }
  // getWeather();

  
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const getWeather = (name)=>{
    dispatch(weather.getWeather(name))
  }

  // store 값 갖고오기
  // 이렇게 state로 어떤 값을 가져올건지 구분지어줄 수 있음
  const weatherData = useSelector(state => state.weatherData);
  const isLogin = useSelector(state => state.Logins.isLogin);
  const userName = useSelector(state => state.Logins.id);


  useEffect(() => {
    console.log(weatherData);
    // getWeather("Seoul");
  }, [weatherData]);

  // 로그인 함수
  const login =() =>{
    dispatch(Logins.login(id, pw))
  }

  // 로그아웃 함수
  const logOut = () =>{
    dispatch(Logins.loginOut())
  }

  return (
    <div className="App">
      <label>도시 이름</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getWeather(name);
        }}
      >
        날씨검색
      </button>
      <div>
        지금 {weatherData && weatherData.data?.name} 날씨는 :{" "}
        {weatherData && weatherData.data?.weather[0]?.main}
      </div>
      <label>아이디</label>
      <br />
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <br />
      <label>비밀번호</label>
      <br />
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={login}>로그인</button>
      <div>로그인 됐나?</div>
      {isLogin ? (
        <div>
          {userName} 유저 로그인됨 <button onClick={logOut}> 로그아웃</button>
        </div>
      ) : (
        <div>로그인 안됨</div>
      )}
    </div>
  );
}

export default App;
