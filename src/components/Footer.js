import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Container,
  useToast,
  Heading,
  FormHelperText,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import emailjs from "emailjs-com";

export default function Footer() {


  return (
    <Stack position={"relative"} w={"100%"} bg={"#000"} py={"40px"} name="contactMe">
      <Container
        maxW={"1280px"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        height={"100%"}
        justify={"center"}
      >
        <Heading
          textAlign={"center"}
          color={"#fff"}
          as={"h5"}
          fontSize={{ base: "1em", md: "1.1em" }}
        >
          All rights reserved © 2024. Fotis Samaridis.
        </Heading>
      </Container>
    </Stack>
  );
}
