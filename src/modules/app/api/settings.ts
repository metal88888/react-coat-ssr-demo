import {ProjectConfig} from "entity/global";
import {delayPromise} from "react-coat-pkg";

export class API {
  // mock一个耗时3秒的异步请求
  @delayPromise(3)
  public getSettings(): Promise<ProjectConfig> {
    return Promise.resolve({
      startupPage: {
        extAdvertUrl: "http://www.baidu.com/",
        imageUrl: "/imgs/startup.jpg",
        times: 10,
      },
    });
  }
  @delayPromise(3)
  public reportError(error: any): Promise<boolean> {
    console.log("reportError", error);
    return Promise.resolve(true);
  }
}

export const api = new API();