import dbclientClient from "@project/dbclient-client-sdk";
import functionsClient from "@project/functions-client-sdk";

export const config = {
  providers: {
    dbclient: dbclientClient,
    functions: functionsClient,
  },
};
