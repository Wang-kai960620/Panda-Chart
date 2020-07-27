import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";
import {UpLoader} from "../Components/Uploader";
import {observer} from "mobx-react";
import styled, {keyframes} from "styled-components";
import {useHistory} from "react-router-dom";


const Wrapper = styled.div`
max-width: 1200px;
margin: 20px auto;
border: 1px dashed black;
:hover{
border: 1px dashed #40a9ff;
}

`;
const H1 = styled.h1`
text-align: center;
margin: 0 auto;
`
const big = keyframes`
0%{
transform: scale(0.99);
}
50%{
transform: scale(1);
}
100%{
transform: scale(0.99);
}
`;
const WrapperTitle = styled.div`

max-width: 1000px;
text-align: center;
animation: 2ms linear infinite ${big};

`;


const Home = observer(() => {
  const {UserStore} = useStore();
  const history = useHistory();
  const toLogin = () => {
    history.push("./login");
  };

  return (
    <Layout>
      <Wrapper>
        {
          UserStore.currentUser ?
            <H1>上传文件</H1>
            :
            <WrapperTitle>
              <h1 onClick={toLogin}>请先登录</h1>
            </WrapperTitle>
        }
        <UpLoader/>
      </Wrapper>
    </Layout>
  );
});

export {Home};