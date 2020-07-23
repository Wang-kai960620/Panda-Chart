import React, {useRef} from "react";
import {observer} from "mobx-react";
import {useStore} from "../Store/UseStore";
import {Layout} from "../Components/Layout";


const Login = observer(() => {
    const {AuthStore} = useStore();
    const container = useRef<HTMLInputElement>(null);

    const newUserName = () => {
      const x = container.current as HTMLInputElement;
      AuthStore.setUserName(x.value);
    };
    return (
      <Layout>
        <h3>{AuthStore.values.userName}</h3>
        <input type='text' onChange={newUserName} ref={container}/>
      </Layout>
    );
  }
);
export {Login};