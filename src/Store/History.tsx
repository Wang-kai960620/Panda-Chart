import {action, observable} from "mobx";
import {Uploader} from "../Model/Controller";

class History {
  @observable list = [];
  @observable page = 0;
  @observable isLoading = false;
  @observable hasMore = true;
  limit = 10;


  @action append(newList: any) {
    this.list = this.list.concat(newList);
    console.log(newList);
    console.log("``````````````");
    console.log(this.list);
  }

  @action find() {
    this.isLoading = true;
    Uploader.find({page: this.page, limit: this.limit})
      .then(list => {
        this.append(list);
        this.page++;
        // @ts-ignore
        if (list.length < this.limit) {
          this.hasMore = false;
        }
      })
      .catch(err => {
      console.log("加载失败");
      console.log(err);
    })
      .finally(() => {
      this.isLoading = false;
    });
  }

  @action reset() {
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }
}

export default new History();