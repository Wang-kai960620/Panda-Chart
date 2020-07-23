import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button} from "antd";


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
const StyledEntry = styled.div`
margin-left: auto;
`


function Header() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div>
      <Wrapper>
        <Text>Panda</Text>
        <NavLink to='/home' activeClassName='selected' exact>首页</NavLink>
        <NavLink to='/history' activeClassName='selected'>上传历史</NavLink>
        <NavLink to='/about' activeClassName='selected'>关于</NavLink>
        <StyledEntry>
        {
          isLogin ?
            <>
              <span>吴彦祖</span>
              <Button type="primary" onClick={() => setIsLogin(false)}>
                <NavLink to='/login' activeClassName='selected'>注销</NavLink>
              </Button>
            </>
            :
            <>
              <Button type="primary" onClick={() => setIsLogin(true)}>
                <NavLink to='/login' activeClassName='selected'>登录</NavLink>
              </Button>
              <Button type="primary">
                <NavLink to='/register' activeClassName='selected'>注册</NavLink>
              </Button>
            </>
        }
        </StyledEntry>

      </Wrapper>

    </div>
  );
}

export {Header};