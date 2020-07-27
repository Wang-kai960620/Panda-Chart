import {createContext, useContext} from "react";
import AuthStore from "./Auth";
import UserStore from './User';
import ImageStore from './Image'


const context = createContext(
  {
    AuthStore ,
    UserStore,
    ImageStore
  }
);
export  const useStore = ()=> useContext(context)
