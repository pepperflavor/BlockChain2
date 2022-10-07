import axios from 'axios';

function login(id, pw){
  // return async(dispatch, getState)
  return async (id, pw) => {
    const data = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: {
        id,
        pw,
      },
    });
    console.log(data);
  };
}

// 회원가입 함수
function signUp(id, pw){

    return async (dispatch, getState) => 
    {
      const data = await axios({
        method: "post",
        url: "http://localhost:8000/signUp",
        data: {
          id,
          pw,
        },
      });
      console.log(data);
    };
}

export const loginAction = { login, signUp };