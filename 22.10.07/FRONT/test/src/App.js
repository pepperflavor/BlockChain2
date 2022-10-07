import { Routes, Route, Navigate } from "react-router-dom";
import {Main, Shop} from './page'
import { Header } from "./component/index";
import { useSelector } from "react-redux";



function App() {
  // 리듀서찾아보면 됨
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const RedirectShop =()=>{
    return isLogin === true ? <Shop/> : loginMessage();
  }

  function loginMessage(){
    alert('로그인이 필요한 서비스입니다.')
    return <Navigate to='/'/>
  }
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/shop" element={<RedirectShop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
