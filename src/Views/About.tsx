import React from "react";
import {Layout} from "../Components/Layout";
import styled, {keyframes} from "styled-components";


const fontColor = keyframes`
  0%{color:red;}
  50%{color:white;}
  100%{color:red;}
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 50px auto;
font-size: 50px;
color: red;
animation: linear infinite 2s ${fontColor};
`;

function About() {
  return (
    <Layout>
      <Wrapper>
        Panda图床好用！！！</Wrapper>
    </Layout>
  );
}

export {About};