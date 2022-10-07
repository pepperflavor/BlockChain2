let init = {
    id :'',
    pw:'',
    isLogin : false
}

function reducer(state=init, action){
    const {type, payload} = action;
    switch (type) {
      case "LOGIN"  :
        console.log('여긴 로그인');
        return {...state, id:payload.id, pw : payload.pw, isLogin : true};
 
      case "LOGOUT"  :
        console.log('여긴 로그아웃');
        return {...state, id:'', pw : '', isLogin :false};
 

      default:
        return state;
    }
}

// function const initialState = {}

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
