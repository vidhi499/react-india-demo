import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router"
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
import ClientSDK from "@project/client-sdk";
import { useEffect, useState } from "react";
async function fetchUserAvatarURL(githubId: string) {
  const data = await fetch(`https://api.github.com/users/${githubId}`, {
    method: "GET",
  })
  const { avatar_url } = await data.json();
  return avatar_url;
}
function validateData(data, setIsNameNotValid, setIsGithubIdNotValid) {
  if (data.name === null || data.name === undefined || data.name === '') {
    setIsNameNotValid(true)
  } else {
    setIsNameNotValid(false)

  }
  if (data.githubId === null || data.githubId === undefined || data.githubId === '') {
    setIsGithubIdNotValid(true);
  } else {
    setIsGithubIdNotValid(false)
  }
}
const About: NextPage = () => {
  const [data, setData] = useState({ name: null, content: null, emailId: null, githubId: null, githubAvatarUrl: null });
  const [isNameNotValid, setIsNameNotValid] = useState(false);
  const [isGithubIdNotValid, setIsGithubIdNotValid] = useState(false);
  const router = new useRouter()

  return (
    <Box overflow="scroll" flex={1}>
      <Box justifyContent="center" h="100vh" alignItems="center">
        <VStack space="3xl">
          <Box>
            <Heading size="xl">Hi 👋,</Heading>
            <Text>I'll need some details about you quickly.</Text>
          </Box>
          <FormControl isRequired size="md" isInvalid={isNameNotValid}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md" >
              <InputField placeholder="Your Name, Please?" value={data.name} onChange={(v) => setData({ ...data, name: v.target.value })} />
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
                Feeling about React India 2023?
              </FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="What did you like about the conference" value={data.content} onChange={(v) => setData({ ...data, content: v.target.value })} />
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
          <FormControl isRequired size="md" isInvalid={isGithubIdNotValid}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Github Username</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Your Github Username" value={data.githubId} onChange={(v) => setData({ ...data, githubId: v.target.value })} />
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
              <FormControlLabelText>How to reach you?</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Your Email ID or any socials" value={data.emailId} onChange={(v) => setData({ ...data, emailId: v.target.value })} />
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
          <Button onPress={async () => {
            validateData(data, setIsNameNotValid, setIsGithubIdNotValid)
            if ((data.name === "" || data.name === null) || (data.githubId === "" || data.githubId === null)) {
              console.log("Validated False")
            }
            else {
              // @ts-ignore
              let githubAvatarUrl = await fetchUserAvatarURL(data.githubId)
              await ClientSDK.dbclient?.user.create({ data: { ...data, githubAvatarUrl } })
              router.push("/")
            }
          }}>
            <ButtonText>Post it!</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box >
  );
};

export default About;
