import React from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navmenu.scss";

export default function NavMenu() {
  return (
    <Box position={"fixed"} top={0} w={"100%"} zIndex={2}>
      <Container
        maxW={"1400px"}
        bg="blackAlpha.800"
        className="nav-bar"
        paddingY={{ base: "1em", md: "2em" }}
      >
        <Container maxW={"1280px"}>
          <Flex>
            <Flex
              direction={"row"}
              width={"100%"}
              justify={"flex-start"}
              gap={5}
              alignItems={"center"}
            >
              <Link to="heroSection" smooth={true} duration={500} className="nav-link">
                About
              </Link>
              <Link to="RecentWorks" smooth={true} duration={500} className="nav-link">
                Recent Works
              </Link>
              <Link to="contactMe" smooth={true} duration={500} className="nav-link">
                Contact
              </Link>
            </Flex>
            <Flex>
              <a href="https://www.linkedin.com/in/fotis-samaridis-04824133/" target="_blank">
                <FaLinkedin className="nav-link_socialicon" />
              </a>
            </Flex>
          </Flex>
        </Container>
      </Container>
    </Box>
  );
}
