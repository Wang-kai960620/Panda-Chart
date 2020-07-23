import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../Store/UseStore";
import {Layout} from "../Components/Layout";


const Login = observer(() => {
  const {AuthStore} = useStore()

    return (
      <Layout>
        <h3>{AuthStore.values.userName}</h3>
      </Layout>
    );
  }
);
export {Login};