import React from "react";
import styled from "styled-components";
import {Header} from "./Header";


const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column-reverse;
`;
const Main = styled.div`
flex-grow: 1;
`;

function Layout(props: any) {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Header/>
    </Wrapper>
  );
}

export {Layout};