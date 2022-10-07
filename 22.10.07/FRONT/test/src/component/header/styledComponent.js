import styled from 'styled-components';

// 마켓플레이스에서 vscode-styled-components
const Button = styled.button`
    width: 100px;
    height: 30px;
    margin: 0;
    padding: 0;
    border: 0;
    margin-left: 20px;
    :last-child{
        width: 130px;
    }
`

const HeaderWrap = styled.div`
    width : 100%;
    height: 50px;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderContent = styled.ul`
    display: flex;
    list-style: none;
`
const ContentBtn = styled.li`
    color: white;
    cursor: pointer;
    margin-left: 10px;
    padding: 10px;
`

const LoginWrap = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: white;
`
// 아이디 여기에 인풋, 비밀번호 여기에 인풋
const LoginInput = styled.input`
    height:30px;
    margin: 0;
    padding: 0;
    border: 0;
    margin: 0 10px 0 10px;
    `

export { Button, HeaderWrap, HeaderContent, ContentBtn, LoginWrap, LoginInput };