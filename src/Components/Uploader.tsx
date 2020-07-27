import React from "react";
import {Upload, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {useStore} from "../Store";
import styled from "styled-components";
import {observer} from "mobx-react";



const {Dragger} = Upload;


const Wrapper = styled.div`
max-width: 1000px;
margin: 50px auto;
`;
const StyledDragger = styled(Dragger)`
  &.bgGround {
    background:rgba(241, 243, 244,0.4) ;

  }
`;

const UpLoader = observer(() => {
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
        <StyledDragger {...props} className="bgGround">
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
        </StyledDragger>

      </Wrapper>
    );
  }
);

export {UpLoader};