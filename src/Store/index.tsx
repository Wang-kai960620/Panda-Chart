import {createContext, useContext} from "react";
import {AuthStore} from "./Auth";


const context = createContext(
  {
    AuthStore : new AuthStore()
  }
)
export  const useStore = ()=> useContext(context)
