import React, {useEffect,} from "react";
import {NavLink, useHistory} from "react-router-dom";
import styled from "styled-components";
import {Button} from "antd";
import {useStore} from "../Store";

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
>span{
font-size: 30px;
}
>Button{
margin: 0 20px;
}
`;


function Header() {
  const {AuthStore, UserStore} = useStore();
  const history = useHistory();
  const handleLogout = () => {
    AuthStore.logout();
    history.push("./register");
  };

  const handleLogin =()=>{
  history.push('./login')
  }
  const handleRegister = ()=>{
    history.push('./register')
  }
  useEffect(() => {
    UserStore.pullUser();
  }, [UserStore]);
  return (
    <div>
      <Wrapper>
        <Text>Panda</Text>
        <NavLink to='/home' activeClassName='selected' exact>首页</NavLink>
        <NavLink to='/history' activeClassName='selected'>上传历史</NavLink>
        <NavLink to='/about' activeClassName='selected'>关于</NavLink>
        <StyledEntry>
          {
            UserStore.currentUser ?
              <>
                <span>{UserStore.currentUser.attributes.username}</span>
                <Button type="primary" onClick={handleLogout}> 注销 </Button>
              </>
              :
              <>
                <Button type="primary" onClick={handleLogin}> 登录 </Button>
                <Button type="primary" onClick={handleRegister}> 注册 </Button>
              </>
          }
        </StyledEntry>

      </Wrapper>

    </div>
  );
}

export {Header};