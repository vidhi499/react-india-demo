module.exports = async function handler(ctx) {
  // console.log("heteee");
  console.log(JSON.stringify(ctx.sdk.storageclient), "jihihi");
  return "hihiih";
  // console.log(ctx.sdk.storageclient.makeBucket(["NewBucket", "us-east-1"]));
};
