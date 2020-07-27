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
        console.log("上传成功，save File");
        this.serveFile = serveFile;
        resolve(serveFile)
      }).catch(err => {
        console.log(err);
        this.isUpLoading = false;
        reject(err)
      }).finally(() => this.isUpLoading = false);
    });
  }
}

export default  new Image()