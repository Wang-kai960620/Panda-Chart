import React, {useEffect,} from "react";
import {NavLink, useHistory} from "react-router-dom";
import styled from "styled-components";
import {Button} from "antd";
import {useStore} from "../Store";
import {observer} from "mobx-react";

const Wrapper = styled.div`
display: flex;
text-align: center;
align-items: center;
padding: 20px 120px ; 
box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.1);
>a{
text-decoration:none;
font-size: 2em;
margin: 0 20px;
padding: 0 10px ;
color:black;
border-radius: 10px ;
&.selected{
background: #b8dbaa;
}
}
`;
const Text = styled.div`
font-size: 50px;
color: #4d57af;
`;
const StyledEntry = styled.div`
margin-left: auto;
>span{
font-size: 30px;
}
>Button{
margin: 0 20px;
background:#b8dbaa;
border: none;
 }
`;

const StyleNavLink = styled(NavLink)`
:hover{
background: #b8dbaa;
color: black;
}
`


const Header = observer(() => {
  const {AuthStore, UserStore} = useStore();
  const history = useHistory();
  const handleLogout = () => {
    AuthStore.logout();
    history.push("./login");
  };

  const handleLogin = () => {
    history.push("./login");
  };
  const handleRegister = () => {
    history.push("./register");
  };
  useEffect(() => {
    UserStore.pullUser();
  }, [UserStore]);
  return (
    <div>
      <Wrapper>
        <Text>Panda</Text>
        <StyleNavLink to='/home' activeClassName='selected' exact>首页</StyleNavLink>
        <StyleNavLink to='/history' activeClassName='selected'>上传历史</StyleNavLink>
        <StyleNavLink to='/about' activeClassName='selected'>关于</StyleNavLink>
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
});

export {Header};