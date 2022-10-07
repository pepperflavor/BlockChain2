import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
  Button,
  HeaderWrap,
  HeaderContent,
  ContentBtn,
  LoginWrap,
  LoginInput,
} from "./styledComponent";
import { useDispatch } from "react-redux";

import { loginAction } from '../../redux/middleware/loginAction';


const Header = () => {
  // 이걸 props로 넘겨주기만하면된다
  const idInput = useRef();
  const pwInput = useRef();
  const dispatch = useDispatch();

  // 로그인할 수 잇는 상태와 회원가입 할 수 있는 상태
  const [wrapState, setWrapState] = useState(true);

  /*  리액트에서 태그를 선택해야하는데 어떻게 하느냐
    document.querySelector
    useRef 함수는 current 속성을 가지고 있는 객체를 반환한다
    객체에 원하는 키값에 값을 넣어줄수도 있고
    이 값이 바뀌어도 랜더링은 되지않지만 값은 계속 남아있다
    current = 태그가 들어온다

    사용방법 :  들고있고 싶은 컴포넌트에 ref props로 
    useRef()로 반환한 객체를 넣어준다
  */
  const nav = useNavigate();

  const login=() =>{
    dispatch(loginAction.login(idInput.value,pwInput.value));
  }

  const signUp = () =>{
    dispatch(loginAction.signUp(idInput.value, pwInput.value));
  }
  
  const setWrap = ()=>{
    // 꺼져있으면 키고 켜져있으면 끔
    setWrapState(!wrapState);

    idInput.value = "";
    pwInput.value = "";
    idInput.current.value = "";
    pwInput.current.value = "";
  }

  return (
    <div>
      <HeaderWrap>
        <HeaderContent>
          <ContentBtn
            onClick={() => {
              nav("/");
            }}
          >
            MAIN
          </ContentBtn>
          <ContentBtn
            onClick={() => {
              nav("/shop");
            }}
          >
            SHOP
          </ContentBtn>
        </HeaderContent>
        <LoginWrap>
          {wrapState ? (
            <>
              <label>아이디 : </label>
              <LoginInput ref={idInput} />
              <label>비밀번호 : </label>
              <LoginInput ref={pwInput} />
              <Button onClick={login}>로그인</Button>
              <Button onClick={setWrap}>회원가입 하러가기</Button>
            </>
          ) : (
            <>
              {" "}
              <label>아이디 : </label>
              <LoginInput
                ref={idInput}
                onChange={(e) => {
                  idInput.value = e.target.value;
                }}
              />
              <label>비밀번호 : </label>
              <LoginInput
                ref={pwInput}
                onChange={(e) => {
                  pwInput.value = e.target.value;
                }}
              />
              <Button onClick={signUp}>회원가입</Button>
              <Button onClick={setWrap}>로그인 하러가기</Button>
            </>
          )}
        </LoginWrap>
      </HeaderWrap>
    </div>
  );
}

export default Header;