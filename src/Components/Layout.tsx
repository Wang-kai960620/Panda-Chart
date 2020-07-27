import React from "react";
import styled from "styled-components";
import {Header} from "./Header";
import {observer} from "mobx-react";


const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column-reverse;
`;
const Main = styled.div`
flex-grow: 1;
`;

const Layout = observer((props: any) => {
    return (
      <Wrapper>
        <Main>
          {props.children}
        </Main>
        <Header/>
      </Wrapper>
    );
  }
);

export {Layout};