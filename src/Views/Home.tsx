import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store";



function Home() {
  const {AuthStore,UserStore} = useStore()

  return (
    <Layout>
      {
        UserStore.currentUser?
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