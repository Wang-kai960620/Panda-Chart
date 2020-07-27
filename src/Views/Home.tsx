import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";
import {UpLoader} from "../Components/Uploader";
import {observer} from "mobx-react";


const Home = observer(() => {
  const {UserStore} = useStore();


  return (
    <Layout>
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
      <UpLoader/>
    </Layout>
  );
});

export {Home};