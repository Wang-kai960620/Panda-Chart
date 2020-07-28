import {observable, action} from "mobx";
import {Uploader} from "../Model/Controller";


class Image {
  @observable filename: string = "";
  @observable file: File | null = null;
  @observable serveFile: any = null;
  @observable isUpLoading: boolean = false;

  @action setFileName(name: string) {
    this.filename = name;
  }

  @action setFile(newFile: File) {
    this.file = newFile;
  }

  @action saveFile() {
    this.isUpLoading = true;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename).then(serveFile => {
        this.serveFile = serveFile;
        resolve(serveFile)
      }).catch(err => {
        this.isUpLoading = false;
        reject(err)
      }).finally(() => this.isUpLoading = false);
    });
  }
  @action reset() {
    this.isUpLoading = false;
    this.serveFile = null;
  }
}

export default  new Image()