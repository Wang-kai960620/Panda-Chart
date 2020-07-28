import {createContext, useContext} from "react";
import AuthStore from "./Auth";
import UserStore from './User';
import ImageStore from './Image'
import HistoryStore from "./History";

const context = createContext(
  {
    AuthStore ,
    UserStore,
    ImageStore,
    HistoryStore

  }
);
export  const useStore = ()=> useContext(context)
