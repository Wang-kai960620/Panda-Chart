import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";
import styled from "styled-components";
import {UpLoader} from "../Components/Uploader";


const Wrapper = styled.div`
max-width: 1000px;
margin: 100px auto;
`;


function Home() {
  const {UserStore} = useStore();


  return (
    <Layout>
      <Wrapper>
        <UpLoader/>
      </Wrapper>
      {
        UserStore.currentUser ?
          <>
            欢迎：<h1>{UserStore.currentUser.attributes.username}</h1>
          </>
          :
          <>
            <h1> 请先登录</h1>
          </>
      }
    </Layout>
  );
}

export {Home};