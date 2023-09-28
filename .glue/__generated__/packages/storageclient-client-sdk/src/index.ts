import ServiceProvider from '@gluestack-v2/framework-cli/build/plugin/ServiceProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

export default class SDK extends ServiceProvider {
  constructor() {
    // Initialization code goes here
    super();
    // console.log('ServerSDK instance initialized');
  }
  //static functions
  init(): void {
    //
  }
  destroy(): void {
    //
  }
  login() {}
  
  makeBucket (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "makeBucket",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  presignedUrl (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "presignedUrl",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketNotification (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketNotification",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setS3TransferAccelerate (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setS3TransferAccelerate",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  listBuckets (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "listBuckets",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getPartialObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getPartialObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  presignedGetObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "presignedGetObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketNotification (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketNotification",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  bucketExists (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "bucketExists",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  fGetObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "fGetObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  presignedPutObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "presignedPutObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeAllBucketNotification (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeAllBucketNotification",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeBucket (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeBucket",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  putObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "putObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  presignedPostPolicy (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "presignedPostPolicy",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketPolicy (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketPolicy",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  listObjects (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "listObjects",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  fPutObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "fPutObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketPolicy (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketPolicy",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  listObjectsV2 (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "listObjectsV2",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  copyObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "copyObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  listenBucketNotification (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "listenBucketNotification",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  listIncompleteUploads (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "listIncompleteUploads",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  statObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "statObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketVersioning (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketVersioning",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketVersioning (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketVersioning",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeObjects (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeObjects",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeIncompleteUpload (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeIncompleteUpload",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  putObjectRetention (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "putObjectRetention",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeBucketTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeBucketTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getObjectRetention (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getObjectRetention",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketLifecycle (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketLifecycle",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  putObjectTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "putObjectTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketLifecycle (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketLifecycle",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeObjectTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeObjectTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeBucketLifecycle (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeBucketLifecycle",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getObjectTagging (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getObjectTagging",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setObjectLockConfig (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setObjectLockConfig",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getObjectLegalHold (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getObjectLegalHold",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getObjectLockConfig (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getObjectLockConfig",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setObjectLegalHold (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setObjectLegalHold",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketEncryption (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketEncryption",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  composeObject (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "composeObject",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketEncryption (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketEncryption",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  selectObjectContent (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "selectObjectContent",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeBucketEncryption (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeBucketEncryption",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  setBucketReplication (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "setBucketReplication",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  getBucketReplication (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "getBucketReplication",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
  removeBucketReplication (params:any)  {
    return new Promise(async (resolve: any, reject: any) => {
      // Your async function code here
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3003/api/storage/client",
          data: {
            operation: "removeBucketReplication",
            params
          },
        });

        console.log(response.data);
        resolve(response.data);
      } catch (error: any) {
      }
    });
  }
}
