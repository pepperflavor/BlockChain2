import React from 'react'
import { Header, Body } from '../com'

function Shop() {
  return (
    <div>
        <Header title="상점페이지"></Header>
        <Body path="/detail/1/10/shirts" name="1번 상품으로 이동"></Body>
        <Body path="/detail/2/10/pants" name="2번 상품으로 이동"></Body>
        <Body path="/detail/3/10/T-shirt" name="3번 상품으로 이동"></Body>
        <Body path="/detail/4/10/hat" name="4번 상품으로 이동"></Body>
        <Body path="/detail/5/10/sssssss" name="5번 상품으로 이동"></Body>
        <Body path="/detail/6/10/skin" name="6번 상품으로 이동"></Body>
    </div>
  )
}

function items(itemCount){
  for(let i =1; i<itemCount; i++){

  }
}

export default Shop