// reducer함수 먼저 만들어야함 , action을 정의하는 곳
// 매개 변수 두가지
// 1. state
// 2. action

let init = {
  weatherData: {},
};

function reducer(state = init, action) {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case "GET_WEATHER_DATA":
      return { ...state, weatherData: payload };
      break;

    default:
      return state;
  }
}

export default reducer;
