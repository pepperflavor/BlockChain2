import axios from 'axios';
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

function login(id, pw){
   return async(dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        id,
        pw,
      },
    });
    console.log(user.data);
    if(user.data){
      dispatch({type: "LOGIN", payload : {id, pw}})
    }else{
      alert('존재하지 않는 아이디입니다 회원가입을 하세요')
    }
  };
}

function logOut(){
  return(dispatch, getState)=>{
    console.log(getState())
    if(getState().loginReducer.isLogin){
      dispatch({type : 'LOGOUT'})
    }
  }
}

// 회원가입 함수
function signUp(id, pw, setWrap) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: {
        id,
        pw,
      },
    });
    console.log(user);
    alert(user.data);
    if (user.data === "가입완료") {
      setWrap();
    }
  };
}

export const loginAction = { login, signUp, logOut };