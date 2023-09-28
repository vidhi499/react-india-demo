import ServiceProvider from '@gluestack-v2/framework-cli/build/plugin/ServiceProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

export default class SDK extends ServiceProvider {
  //static functions
  init(): void {
    //
  }
  destroy(): void {
    //
  }
  login() {}

  getProvider(): SDK {
    return this;
  }
  add=
  (a:any, b  :any)=>{
    return new Promise(async (resolve:any, reject:any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/functions/add",
          data: {a,b },
        });

        resolve(response.data);
      } catch (error:any) {
        reject(error.message);
      }
    });
  }
  newFunc=
  (a  :any)=>{
    return new Promise(async (resolve:any, reject:any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/functions/newFunc",
          data: {a },
        });

        resolve(response.data);
      } catch (error:any) {
        reject(error.message);
      }
    });
  }
  upload=
  ( )=>{
    return new Promise(async (resolve:any, reject:any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/functions/upload",
          data: {},
        });

        resolve(response.data);
      } catch (error:any) {
        reject(error.message);
      }
    });
  }
  
}
