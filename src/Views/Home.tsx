import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";
import {Upload, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import styled from "styled-components";


const Wrapper = styled.div`
max-width: 1600px;
margin: 100px auto;
`;


function Home() {
  const {UserStore} = useStore();
  const {Dragger} = Upload;
  const props = {
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <Layout>
      <Wrapper>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>,
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