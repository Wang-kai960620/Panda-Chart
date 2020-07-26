import {createContext, useContext} from "react";
import AuthStore from "./Auth";
import UserStore from './User';


const context = createContext(
  {
    AuthStore ,
    UserStore
  }
)
export  const useStore = ()=> useContext(context)
