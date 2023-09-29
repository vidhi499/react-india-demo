import dbclientClient from "@project/dbclient-client-sdk";
import storageclientClient from "@project/storageclient-client-sdk";
import functionsClient from "@project/functions-client-sdk";

export const config = {
  providers: {
    dbclient: dbclientClient,
    storageclient: storageclientClient,
    functions: functionsClient,

    storageclient: storageclientClient,
  },
};
