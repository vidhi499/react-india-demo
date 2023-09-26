import functionsClient from "@project/functions-client-sdk";
import databaseclientClient from "@project/databaseclient-client-sdk";

export const config = {
  providers: {
    functions: functionsClient,
    databaseclient: databaseclientClient,
  },
};
