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
              Check out my latest projects and see what I've been up to.
            </Text>
          </HStack>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>

            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["1"].mainText}
                badgeColor="orange"
                badgeText={data["1"].badgeText}
                buttonText={data["1"].buttonText}
                imageLink={data["1"].websiteLink}
                imageSrc={data["1"].imgSrc}
                imageAlt={data["1"].imageAlt}
                designLink={data["1"].designLink}
                onClick={() => handleOpenModal(1)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["2"].mainText}
                badgeColor="teal"
                badgeText={data["2"].badgeText}
                buttonText={data["2"].buttonText}
                imageLink={data["2"].websiteLink}
                imageSrc="https://fotissam.github.io/fossam-portfolio/images/kotsilati_thumb.jpg"
                imageAlt={data["2"].imageAlt}
                designLink={data["2"].designLink}
                onClick={() => handleOpenModal(2)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["3"].mainText}
                badgeColor="teal"
                badgeText={data["3"].badgeText}
                buttonText={data["3"].buttonText}
                imageLink={data["3"].websiteLink}
                imageSrc={data["3"].imgSrc}
                imagePosition="flex-start"
                imageAlt={data["3"].imageAlt}
                designLink={data["3"].designLink}
                onClick={() => handleOpenModal(3)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["4"].mainText}
                badgeColor={data["4"].badgeColor}
                badgeText={data["4"].badgeText}
                buttonText={data["4"].buttonText}
                imageLink={data["4"].websiteLink}
                imageSrc={data["4"].imgSrc}
                imageAlt={data["4"].imageAlt}
                designLink={data["4"].designLink}
                onClick={() => handleOpenModal(4)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["5"].mainText}
                badgeColor={data["5"].badgeColor}
                badgeText={data["5"].badgeText}
                buttonText={data["5"].buttonText}
                imageLink={data["5"].websiteLink}
                imageSrc={data["5"].imgSrc}
                imageAlt={data["5"].imageAlt}
                designLink={data["5"].designLink}
                onClick={() => handleOpenModal(5)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["6"].mainText}
                badgeColor={data["6"].badgeColor}
                badgeText={data["6"].badgeText}
                buttonText={data["6"].buttonText}
                imageLink={data["6"].websiteLink}
                imageSrc={data["6"].imgSrc}
                imagePosition="flex-start"
                imageAlt={data["6"].imageAlt}
                designLink={data["6"].designLink}
                onClick={() => handleOpenModal(6)}
              />
            </GridItem>
            <GridItem w="100%" h="100%" bg="gray.500">
              <CaseStudiesBox
                mainText={data["7"].mainText}
                badgeColor={data["7"].badgeColor}
                badgeText={data["7"].badgeText}
                buttonText={data["7"].buttonText}
                imageLink={data["7"].websiteLink}
                imageSrc={data["7"].imgSrc}
                imagePosition="flex-start"
                imageAlt={data["7"].imageAlt}
                designLink={data["7"].designLink}
                onClick={() => handleOpenModal(7)}
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
