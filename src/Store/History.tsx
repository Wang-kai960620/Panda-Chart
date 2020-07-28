import {action, observable} from "mobx";
import {Uploader} from "../Model/Controller";
import {message} from'antd'

class History {
  @observable list = [];
  @observable page = 0;
  @observable isLoading = false;
  @observable hasMore = true;
  limit = 10;


  @action append(newList: any) {
    this.list = this.list.concat(newList);
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
        }else{
          message.success('加载成功')
        }
      })
      .catch(err => {
        message.error('加载失败')
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