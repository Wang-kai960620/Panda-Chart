import AV, {Query, User} from "leancloud-storage";
import {message} from 'antd'

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
    User.logOut().then(() => {
      console.log("注销成功");
    }).catch(err => console.log(err));
  },
  getCurrent() {
    return User.current();
  }
};

const Uploader = {
  add(file: File | null, fileName: string) {
    const item = new AV.Object("Image");
    const avFile = new AV.File(fileName, file);
    item.set("filename", fileName);
    item.set("owner", AV.User.current());
    item.set("url", avFile);
    return new Promise((resolve, reject) => {
        item.save().then(serveFile => {
          console.log("上传成功");
          resolve(serveFile);
        }).catch(err => {
          console.log("err");
          reject(err);
        });
      }
    );
  },
  find({page=0, limit=10}) {
    const query = new Query('Image');
    query.include('owner');
    query.limit(limit);
    query.skip(page*limit);
    query.descending('createdAt');
    query.equalTo('owner', AV.User.current());
    return new Promise((resolve, reject) => {
      query.find()
        .then(results => {
          resolve(results);})
        .catch(error => reject(error))
    });
  }
};


export {Auth, Uploader};