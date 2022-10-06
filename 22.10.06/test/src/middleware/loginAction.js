import axios from "axios";


function login(id, pw){
    return (dispatch, getState)=>{
        dispatch({type : "LOGIN", payload : {id :'', pw: ''}})
    }
}

function loginOut(id, pw){
    return (dispatch, getState)=>{
        dispatch({type : "LOGINOUT", payload : {id :'', pw: ''}})
    }
}

export const Logins = { login, loginOut };