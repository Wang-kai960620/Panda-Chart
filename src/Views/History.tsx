import React from "react";
import {Layout} from "../Components/Layout";
import {observer} from "mobx-react";
import styled from "styled-components";
import {ListComponent} from "../Components/List";


const Wrapper = styled.div`
max-width: 1600px;
margin: 0 auto;
padding: 10px 20px ;
`;

const History = observer(() => {
  return (
    <Layout>
      <Wrapper>
        <ListComponent/>
      </Wrapper>
    </Layout>
  );
});

export {History};