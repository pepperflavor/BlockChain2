import axios from "axios"

 
// axios
// axios는 브라우저
/*  자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할때
    axios를 쓰는 편이다. 속성은 url이 필수고 나머지는 전달을 안해도 상관없다.
    method는 지정안하면 디폴트가 Get방식
*/

/* ========== axios 설치방법=============
npm i axios
==================================
*/
// Get 요청 방식

function getWeather(name) {
  // thunk가 해주는 일이 Action Createors라는 함수를 만들어주는 것
  // Action Createors 함수는 함수를 반환한다.
  // thunk는 dispatch를 딜레이 시켜주는 역할

  // action 함수는 함수를 반환한다.
  // dispatch getState 둘다 함수이다.
  return async (dispatch, getState) => {
    const data = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9a8b5f3549350c3a377b146d8b970339`,
    });
    console.log(data);
    console.log(getState());

    dispatch({ type: "GET_WEATHER_DATA", payload: data });
    console.log(getState());
    // getState() 함수는 store 저장소에 있는 state를 반환해준다
  };
}

export const weather = { getWeather };