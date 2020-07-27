import React, {useRef} from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";
import {UpLoader} from "../Components/Uploader";
import {observer, useLocalStore} from "mobx-react";
import styled, {keyframes} from "styled-components";
import {useHistory} from "react-router-dom";
import {message} from "antd";


const StyleImg = styled.img`
width: 200px ;
@media (max-width: 500px){
width: 100px;
}
`;
const Wrapper = styled.div`
max-width: 1200px;
margin: 50px auto;
background:rgba(241, 243, 244,0.25) ;
border: 2px dashed #e1e1e1e1;
 @media (max-width: 500px) {
 max-width: 300px;
  }
:hover{
border: 2px dashed #40a9ff;
}

`;
const H1 = styled.h1`
text-align: center;
margin: 0 auto;
`;
const big = keyframes`
0%{
background: black;
}
50%{
background: red;
}
100%{
background: black;}

`;
const StyleDiv = styled.div`
background: aqua;
max-width: 1000px;
text-align: center;
margin:  0 auto;
//animation: 2ms linear infinite ${big};
color: white;
font-size: 20px;
`;
const Result = styled.div`
margin: 50px 100px;
 @media (max-width: 500px) {
 margin: 0;
  }
`;

const Home = observer(() => {
  const {UserStore} = useStore();
  const history = useHistory();
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const store = useLocalStore(() => ({
    width: "",
    setWidth(width: string) {
      store.width = width;
    },
    get widthStr() {
      return this.width === "" ? "" : `/w/${store.width}`;
    },
    height: "",
    get heightStr() {
      return this.height === "" ? "" : `/h/${store.height}`;
    },
    setHeight(height: string) {
      store.height = height;
    },
    //?imageView2/0/w/800/h/400)
    get AllStr() {
      return ImageStore.serveFile.attributes.url.attributes.url + "?imageView2/0" + this.heightStr + this.widthStr;
    }
  }));

  const inWidth = () => {
    const width = widthRef.current as HTMLInputElement;
    if ((/^\d+$/).test(width.value)) {
      store.width = width.value;
    } else {
      message.warning("尺寸只能是数字");
    }
  };
  const inHeight = () => {
    const height = heightRef.current as HTMLInputElement;
    if ((/^\d+$/).test(height.value)) {
      store.height = height.value;
    } else {
      message.warning("尺寸只能是数字");
    }
  };
  const {ImageStore} = useStore();
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
            <StyleDiv>
              <span onClick={toLogin}>请先登录</span>
            </StyleDiv>
        }
        <UpLoader/>
        {
          ImageStore.serveFile ?
            <Result>
              <h1>上传结果</h1>
              <StyleImg src={ImageStore.serveFile.attributes.url.attributes.url}/>
              <dl>
                <dt><h2> 线上地址 </h2></dt>
                <dd>
                  <a rel='noopener' href={ImageStore.serveFile.attributes.url.attributes.url}>
                    {ImageStore.serveFile.attributes.url.attributes.url}
                  </a>
                </dd>
                <dt><h2>可选尺寸</h2></dt>
                <dd>
                  <input placeholder='请在这里输入宽度' type="text" ref={widthRef} onChange={inWidth}/>
                  <input placeholder='请在这里输入高度' type="text" ref={heightRef} onChange={inHeight}/>
                </dd>
                <dd>
                  <a href={store.AllStr}>{store.AllStr}</a>
                </dd>
              </dl>
            </Result>
            : null
        }
      </Wrapper>
    </Layout>
  );
});

export {Home};