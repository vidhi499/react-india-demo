import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  VStack,
  Heading,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";
// import ClientSDK from "@project/client-sdk";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [data, setData] = useState([]);

  function test(data: any) {
    // const imageUrl = URL.createObjectURL(new Blob(binaryData, { type: "application/png" }))
    // const imageElement = document.createElement('img');
    // imageElement.src = imageUrl;
    // document.body.appendChild(imageElement);
  }

  return (
    <Box overflow="scroll" flex={1}>
      <Box justifyContent="center" h="100vh" alignItems="center">
        <VStack space="3xl">
          <Box>
            <Heading size="xl">Hi 👋,</Heading>
            <Text>I'll need some details about you quickly.</Text>
          </Box>
          <FormControl isRequired size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Your Name, Please?" />
            </Input>
            {/* <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper> */}
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                This is a Required Field
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                Thoughts on React India 2023?
              </FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="What did you like about the conference" />
            </Input>
            {/* <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper> */}
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                This is a Required Field
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isRequired size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Github</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Your Github ID" />
            </Input>
            {/* <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper> */}
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                This is a Required Field
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Your Email ID" />
            </Input>
            {/* <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper> */}
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                This is a Required Field
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;
