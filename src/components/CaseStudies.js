import React, { useState } from "react";
import {
  Container,
  Text,
  Heading,
  HStack,
  Stack,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import CaseStudiesBox from "./parts/CaseStudiesBox";
import CaseStudyModal from "./parts/CaseStudyModal";
import data from "./json/casestudies.json";

export default function CaseStudies() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caseNumber, setIsCaseNumber] = useState(null);

  const handleOpenModal = (number) => {
    setIsCaseNumber(number);
    onOpen();
  };

  const currentCaseStudy = caseNumber !== null ? data[caseNumber] : {};

  return (
    <>
      <Stack position={"relative"} w={"100%"} bg={"#fff"} py={"50px"} name="RecentWorks">
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
              Hello, I'm a web developer and designer from Athens, Greece. I create bespoke websites
              to help people go further online.
            </Text>
          </HStack>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>

            <GridItem w="100%" h="100%" bg="blue.500">
              <CaseStudiesBox
                mainText={data["1"].mainText}
                badgeColor="orange"
                badgeText={data["1"].badgeText}
                descDirection="row"
                mobDirection="column"
                buttonText={data["1"].buttonText}
                imageLink={data["1"].websiteLink}
                imageSrc="http://localhost:3000/fossam-portfolio/images/annanotara_thumb.jpg"
                imagePosition="flex-end"
                imageAlt={data["1"].imageAlt}
                designLink={data["1"].designLink}
                onClick={() => handleOpenModal(1)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="blue.500">
              <CaseStudiesBox
                mainText={data["2"].mainText}
                badgeColor="teal"
                badgeText={data["2"].badgeText}
                descDirection="row-reverse"
                mobDirection="column"
                buttonText={data["2"].buttonText}
                imageLink={data["2"].websiteLink}
                imageSrc="https://fotissam.github.io/fossam-portfolio/images/kotsilati_thumb.jpg"
                imagePosition="flex-start"
                imageAlt={data["2"].imageAlt}
                designLink={data["2"].designLink}
                onClick={() => handleOpenModal(2)}
              />
            </GridItem>
          </Grid>
        </Container>
      </Stack>
      <CaseStudyModal
        isOpen={isOpen}
        onClose={onClose}
        modalHeading={currentCaseStudy.buttonText || "Case Study"}
        modalBody={currentCaseStudy.mainText || "No details available for now"}
        colorScheme={currentCaseStudy.badgeColor || "gray"}
        modalTextB={currentCaseStudy.modalTextB || "No text here"}
        imageLink={currentCaseStudy.websiteLink || "#"}
        buttonText="Visit the website"
        stacks={currentCaseStudy.modalStacks || "#"}
        imageSrc={currentCaseStudy.imgSrc || "#"}
        imageAlt={currentCaseStudy.imageAlt || ""}
        designLink={currentCaseStudy.designLink || ""}
      />
    </>
  );
}
