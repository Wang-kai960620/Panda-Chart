import {action, observable} from "mobx";


class AuthStore {
  @observable isLogin: boolean = false;

  @observable isLading: boolean = false;

  @observable values = {
    userName: "jirengu",
    passWorld: ""
  };


  @action setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  @action setUserName(name: string) {
    this.values.userName = name;
  }

  @action setPassWorld(value: string) {
    this.values.passWorld = value;
  }

  @action Login() {
    console.log("登录中");
    this.isLading = true;
    setTimeout(() => {
      console.log("登录成功");
      this.isLogin = true;
      this.isLading = false;
    }, 1000);
  }

  @action Register() {
    console.log("注册中");
    this.isLading = true;
    setTimeout(() => {
      console.log("注册成功");
      this.isLogin = true;
      this.isLading = false;
    }, 1000);
  }
}

export {AuthStore}