import React from "react";
import { Container, Text, Heading, HStack, Stack, Grid, GridItem } from "@chakra-ui/react";
import skills from "./json/skills.json";
import SkillBox from "./parts/SkillBox";
import { TfiStatsUp } from "react-icons/tfi";
import { MdOutlineWhatshot } from "react-icons/md";
import { FaStar, FaHeart } from "react-icons/fa";

export default function CaseStudies() {
  return (
    <>
      <Stack position={"relative"} w={"100%"} bg={"#000"} py={"120px"} name="My Services">
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
            as={"h2"}
            fontSize={{ base: "2em", md: "3em" }}
          >
            My Services
          </Heading>
          <HStack justify={"center"}>
            <Text
              as={"code"}
              color={"#9C9C9C"}
              fontSize={{ base: "1em", md: "1.3em" }}
              align={"center"}
              maxW={"800px"}
              mb={24}
            >
              Here are the services I provide. If you don't see what you're looking for, no problem!
              I'm ready to customize solutions to meet your specific needs.{" "}
            </Text>
          </HStack>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }} gap={6}>
            <GridItem colSpan={{ base: "5", md: "3" }}>
              <SkillBox
                badgeColor={skills["1"].badgeColor}
                badgeText={skills["1"].badgeText}
                skillText={skills["1"].skillText}
                skillDesc={skills["1"].skillDesc}
                skillIcon={<TfiStatsUp size={20} />}
              />
            </GridItem>
            <GridItem colSpan={{ base: "5", md: "2" }}>
              <SkillBox
                badgeColor={skills["2"].badgeColor}
                badgeText={skills["2"].badgeText}
                skillText={skills["2"].skillText}
                skillDesc={skills["2"].skillDesc}
                skillIcon={<MdOutlineWhatshot size={20}/>}
              />
            </GridItem>
            <GridItem colSpan={{ base: "5", md: "2" }}>
              <SkillBox
                badgeColor={skills["3"].badgeColor}
                badgeText={skills["3"].badgeText}
                skillText={skills["3"].skillText}
                skillDesc={skills["3"].skillDesc}
                skillIcon={<FaStar size={20} />}
              />
            </GridItem>
            <GridItem colSpan={{ base: "5", md: "3" }}>
              <SkillBox
                badgeColor={skills["4"].badgeColor}
                badgeText={skills["4"].badgeText}
                skillText={skills["4"].skillText}
                skillDesc={skills["4"].skillDesc}
                skillIcon={<FaHeart size={20} />}
              />
            </GridItem>
            <GridItem colSpan={2}></GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
