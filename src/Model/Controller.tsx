import AV, {Query, User} from "leancloud-storage";

AV.init({
  appId: "YId6yG8LcyK0CGwLFaYIgYgf-gzGzoHsz",
  appKey: "0IwcJacKUg9qaHmGBJrjwCC6",
  serverURL: "https://yid6yg8l.lc-cn-n1-shared.com"
});


const Auth = {
  register(userName: string, password: string) {
    const user = new User();
    user.setUsername(userName);
    user.setPassword((password));
    return new Promise((resolve, reject) => {
      user.signUp().then(value => resolve(value), error => reject(error));
    });
  },
  login(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      User.logIn(userName, password).then(response => resolve(response), error => reject(error));
    });
  },
  logout() {
    User.logOut();
  },
  getCurrent(){
    User.current()
  }
};

export {Auth}