import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Box, Button, ButtonText, Input, InputField, Text } from "@gluestack-ui/themed";
import ClientSDK from "@project/client-sdk";
import { useEffect, useState } from "react";


const About: NextPage = () => {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   async function getData() {
  //     const res = await ClientSDK.dbclient.files.findMany()
  //     console.log(res)
  //     setData(res)
  //   }
  //   getData()
  // }, [])

  // async function getImage(data: any) {
  //   return await ClientSDK.storageclient.getObject(["mybucket", data.path, function (err: any, dataStream: any) {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     return dataStream
  //   }]);
  // }

  function test(data: any) {
    // const binaryData: any = getImage(data)
    // const imageUrl = URL.createObjectURL(new Blob(binaryData, { type: "application/png" }))

    // const imageElement = document.createElement('img');
    // imageElement.src = imageUrl;
    // document.body.appendChild(imageElement);
  }

  return (
    <div className={styles.parent}>
      <Box justifyContent="center" h="100vh" alignItems="center">
        {data && data.map((value: any) => {
          test(value)
          return JSON.stringify(value)
        })}
        {/* {JSON.stringify(data)} */}
      </Box>
    </div>
  );
};

export default About;
