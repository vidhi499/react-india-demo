import dbclientServer from "@project/dbclient-server-sdk";
import storageclientServer from "@project/storageclient-server-sdk";

export const config = {
  providers: {
    dbclient: dbclientServer,
    storageclient: storageclientServer,
  },
};
