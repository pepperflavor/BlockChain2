// reducer함수 먼저 만들어야함 , action을 정의하는 곳
// 매개 변수 두가지
// 1. state
// 2. action

let init = {
    sleep : 0,
}

function reducer(state = init, action){
    console.log(action);
    const {type, payload} = action;
    switch (action.type) {
      case "Night":
        console.log("충분한 수면");
        return { ...state, sleep: (state.sleep = true) };

      case "Dawned":
        console.log("쪽잠");
        return { ...state, sleep: (state.sleep = false) };
        break;

      default:
        break;
    }
}

export default reducer;