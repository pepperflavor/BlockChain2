import React, { useState } from 'react'
import {Header, Body} from '../com'
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

// 파라미터 값을 가져오기 위한 방법
/*  리액트에서 지원해주는 유용한 함수를 '리액트 훅'이라고 한다.
    --- userParams 사용
        url 경로에 있는 파라미터들을 객체의 형태로 불러올 수 잇다.
        useParams 함수를 실행해주고 반환된 객체를 가지고 동작한다.
*/

// 검색하려면?
/*  검색 쿼리문도 가져와보자
    검색하려면 input 입력창이 있어야하니까
    입력했을 때 값을 저장해 놓자 이랙트 값 저장해야할땐 useState로 들고 있어야겠다.
    input value를 useState값에 넣어놓고 그 값을 언제든 사용할 수있다.
*/

/*================ 검색 쿼리문 ===================================================
    useSearchParams 이 함수를 사용한다. 경로 관련이기 때문에 react-router-dom에 있다
    useSearchParams 이 함수를 실행해서 반환받은 객체를 사용
    useSearchParams가 경로에서 뽑아주는 영역은
    ? 뒤에 키값을 기준으로 
    ?q=1 이런 형태는 q라는 키값이 객체 형태로 나온다(q:1)
    useSearchParams 함수 실행 후 반환된 객체 사용
=================================================================================
*/

// 현재 경로를 가져와서 사용해야하는데... 이때 함수 useLocation 사용
/*  함수 실행후 반환된 객체 사용
*/
const Detail=()=> {
    const [serch, setSerch] = useState('');
    const params = useParams();
    const location = useLocation();
    const [query, setQuerry] = useSearchParams();
    // q키의 값을 가져오겠다는 뜻
    console.log("query.get('q')  " + query.get('q'));
    console.log(location);
    const keyInput = (e) =>{
        setSerch(e.target.value);
    }
  return (
    <div>
      <Header title="상세페이지"></Header>
      <div>{serch}</div>
      <div>너 이거 검색했어 {query.get("q")}</div>
      <input onChange={keyInput}></input>
      {/* <Body path="/shop" name="상점 페이지" item={params}/> */}
      <Link to={location.pathname + "?q=" + serch}>검색하기</Link>
    </div>
  );
}

export default Detail