import {action, observable} from "mobx";
import UserStore from './User';
import {Auth} from "../Model/Controller";


class AuthStore {
  @observable values = {
    userName: "",
    passWord: ""
  };


  @action setUserName(name: string) {
    this.values.userName = name;
  }

  @action setPassWorld(value: string) {
    this.values.passWord = value;
  }

  @action Login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.userName, this.values.passWord).then(user => {
        console.log("登录成功");
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }

  @action Register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.userName, this.values.passWord).then(user => {
        console.log("注册成功");
        console.log(user);
        resolve(user);
      }).catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }

  @action logout() {
    Auth.logout();
    UserStore.resetUser();
  }
}


export  default new AuthStore