import React from "react";
import {
  Stack,
  Container,
  Heading,
} from "@chakra-ui/react";

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
