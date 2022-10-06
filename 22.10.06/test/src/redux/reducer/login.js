let init = {
  id: '',
  pw:'',
  Islogin : false
};

function reducer(state = init, action) {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state,id : payload.id, pw: payload.pw, Islogin: payload.Islogin};
    case "LOGOUT":
      return { ...state,id : payload.id, pw: payload.pw, Islogin: payload.Islogin};

    default:
      return state;
  }
}

export default reducer;
