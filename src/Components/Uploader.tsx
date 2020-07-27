import React from "react";
import {Upload, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {useStore} from "../Store";
import styled from "styled-components";
import {observer} from "mobx-react";

const Wrapper = styled.div`
max-width: 1000px;
margin: 100px auto;
`;


const UpLoader = observer(() => {
    const {Dragger} = Upload;

    const {UserStore, ImageStore} = useStore();
    const props = {
      beforeUpload: (file: File) => {
        ImageStore.setFile(file);
        ImageStore.setFileName(file.name);
        if (UserStore.currentUser === null) {
          message.warning(" 请先登录在上传");
          return false;
        } else {
          ImageStore.saveFile().then(() => {
            console.log("上传成功");
          }).catch(err => {
            console.log("上传失败");
            alert(JSON.stringify(err));
          });
        }
        return false;
      },
    };
    return (
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
        </Dragger>
        {
          ImageStore.serveFile ?
            <>
              <h1>上传结果</h1>
              <dl>
                <dt> 线上地址</dt>
                <dd>
                  <a rel='noopener' href={ImageStore.serveFile.attributes.url.attributes.url}>
                    {ImageStore.serveFile.attributes.url.attributes.url}
                  </a>
                </dd>
              </dl>
            </>
            : null
        }
      </Wrapper>
    );
  }
);

export {UpLoader};