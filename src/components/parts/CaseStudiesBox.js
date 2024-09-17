import React, { useState } from "react";
import { Stack, Image, Link, Button } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CaseStudiesBox(props) {
  const [showHoverBox, setShowHoverBox] = useState(false);

  const handleShowBox = () => {
    setShowHoverBox(true);
  };

  const handleHideBox = () => {
    setShowHoverBox(false);
  };

  return (
    <Stack
      position={"relative"}
      onMouseEnter={handleShowBox}
      onMouseLeave={handleHideBox}
      overflow="hidden" // ensures the hover box doesn’t overflow
    >
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        width={"100%"}
        height={{ base: "200px", md: "100%" }}
        objectFit="cover"
        transition="transform 0.4s ease"
        transform={showHoverBox ? "scale(1.1)" : "scale(1)"}
        filter={showHoverBox ? "grayscale(0%)" : "grayscale(100%)"}
      />
      <Link
        onClick={props.onClick}
        position={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        bgColor={"rgba(0, 0, 0, 0.7)"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        opacity={showHoverBox ? 1 : 0}
        transition="opacity 0.6s ease"
        textDecoration={'none'}
        _hover={{textDecoration: 'none'}}
      >
        <Button display={'flex'} alignContent={'center'} variant={"unstyled"} rightIcon={<IoIosArrowRoundForward size={20}/>} textDecoration={'none'}>
          {props.buttonText}
        </Button>
      </Link>
    </Stack>
  );
}
