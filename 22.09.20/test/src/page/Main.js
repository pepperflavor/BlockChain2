import React from 'react'
import {Header, Body} from '../com'

const Main = ({islogin}) => {
  return (
    <div>
      <Header title="메인페이지"></Header>
      <Body path="login" name="로그인 페이지" islogin={islogin}></Body>
    </div>
  );
}

export default Main