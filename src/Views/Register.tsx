import React from "react";
import {Layout} from "../Components/Layout";
import {useStore} from "../Store/UseStore";


function Register() {
  const {AuthStore} = useStore()
return (
  <Layout>
    <h3>{AuthStore.values.userName}</h3>

  </Layout>
)
}

export {Register}