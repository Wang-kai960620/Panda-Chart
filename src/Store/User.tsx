import {observable, action} from "mobx";
import {Auth} from "../Model/Controller";

class UserStore {
  @observable currentUser: any = null;

  @action pullUser() {
    this.currentUser = Auth.getCurrent();
  }

  @action resetUser() {
    this.currentUser = null;
  }
}

export default new UserStore();