import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
text-align: center;
align-items: center;
padding: 20px 120px ; 
background: #c4c4c4;
>a{
text-decoration:none;
font-size: 2em;
padding: 0 20px;
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

function Header() {
  return (
    <div>
      <Wrapper>
        <Text>Panda</Text>
        <NavLink to='/home' activeClassName='selected' exact>首页</NavLink>
        <NavLink to='/history' activeClassName='selected'>上传历史</NavLink>
        <NavLink to='/about' activeClassName='selected'>关于</NavLink>
      </Wrapper>
    </div>
  );
}

export {Header};