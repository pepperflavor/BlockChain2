import React from 'react'
import { Header, Body } from "../com";

const Login = ({ login, islogin }) => {
  const setLogin = () => {
    login(true);
  };
  return (
    <div>
      <Header title="로그인 페이지"></Header>
      <Body path="/shop" name="상점 페이지" islogin={islogin}></Body>
      <Body path="/mypage" name="마이 페이지" islogin={islogin}></Body>
      <button onClick={setLogin}>로그인 하기</button>
    </div>
  );
};

export default Login