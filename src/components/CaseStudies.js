import React from "react";
import { Container, Text, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import CaseStudiesBox from "./parts/CaseStudiesBox";

export default function CaseStudies() {
  return (
    <>
      <Stack position={"relative"} w={"100%"} bg={"#fff"}>
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
            color={"#000"}
            as={"h2"}
            fontSize={{ base: "2em", md: "3em" }}
          >
            Recent Works
          </Heading>
          <HStack justify={"center"}>
            <Text
              as={"code"}
              color={"#9C9C9C"}
              fontSize={{ base: "1em", md: "1.3em" }}
              align={"center"}
              maxW={"800px"}
            >
              Hello, I'm a web developer and designer from Athens, Greece. create bespoke websites
              to help people go further online.
            </Text>
          </HStack>
          <Flex direction={'column'} gap={'60px'}>
            <CaseStudiesBox
              mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              badgeColor="orange"
              badgeText="Branding"
              descDirection="row"
              mobDirection="column"
              buttonText="View the case of Annanotara.com"
              imageSrc="http://localhost:3000/fossam-portfolio/images/annanotara_thumb.jpg"
              imagePosition="flex-end"
              imageAlt="case of Annanotara.com"
            />
            <CaseStudiesBox
              mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              badgeColor="teal"
              badgeText="Architecture"
              descDirection="row-reverse"
              mobDirection="column"
              buttonText="View the case of RoulaKotsilati"
              imageSrc="http://localhost:3000/fossam-portfolio/images/kotsilati_thumb.jpg"
              imagePosition="flex-start"
              imageAlt="case of RoulaKotsilati"
            />
          </Flex>
        </Container>
      </Stack>
    </>
  );
}
