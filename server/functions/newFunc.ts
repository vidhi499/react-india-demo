module.exports = async function handler(ctx) {
  const { a } = ctx.params;

  console.log(a);
  return "hihiihffvcev";
  // console.log(ctx.sdk.storageclient.makeBucket(["NewBucket", "us-east-1"]));
};
