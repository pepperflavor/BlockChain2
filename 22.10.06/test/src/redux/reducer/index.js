// redux에서 지원해주느,ㄴ 함수
// 리듀서 함수를 합쳐준다 하나로
// combineReducers() 함수에 객체로 전달하면 끝

import { combineReducers } from "redux";
import Logins from "./login";
import { weather } from "../../middleware";

const rootReducer = combineReducers({ Logins, weather });

export default rootReducer;