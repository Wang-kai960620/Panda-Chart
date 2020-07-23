import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { Button } from 'antd';


const Wrapper = styled.div`
display: flex;
text-align: center;
align-items: center;
padding: 20px 120px ; 
background: #c4c4c4;
>a{
text-decoration:none;
font-size: 2em;
margin: 0 20px;
color: #fff;
&.selected{
color: #b8dbd3;
border-bottom: 1px solid ;
}
}
`;
const Text = styled.div`
font-size: 50px;
color: #ffd866;
`;
const StyleButton = styled(Button)`
margin: 0 10px;
`

function Header() {
  return (
    <div>
      <Wrapper>
        <Text>Panda</Text>
        <NavLink to='/home' activeClassName='selected' exact>首页</NavLink>
        <NavLink to='/history' activeClassName='selected'>上传历史</NavLink>
        <NavLink to='/about' activeClassName='selected'>关于</NavLink>
      <StyleButton type="primary">
        <NavLink to='/login' activeClassName='selected'>登录</NavLink>
      </StyleButton>
      <StyleButton type="primary">
        <NavLink to='/register' activeClassName='selected'>注册</NavLink>
    </StyleButton>
      </Wrapper>

    </div>
  );
}

export {Header};