import {
  Container,
  Heading,
  Box,
  Drawer,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Container maxW="container.lg">
      <Button
        ml="110px"
        mt="100px"
        border="2px"
        leftIcon={<AiFillHome />}
        colorScheme="teal"
        variant="outline"
        rounded="xl"
        as={Link}
        to="/"
      >
        Home
      </Button>
      <Box mt="6" ml="150px" padding="2" color="#594545">
        About Us
      </Box>
      <Box
        mt="4"
        ml="170px"
        border="2px"
        borderColor="#26B893"
        padding="10"
        colorScheme="teal"
        variant="outline"
        backgroundColor="white"
        rounded="xl"
        textAlign="Center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
        <Box fontWeight="bold" fontSize="24">
          <Box
            ml="315px"
            mr="10"
            mt="5"
            w="24"
            rounded="full"
            h="24"
            bgColor="gray"
          ></Box>
          GDE AGUNG MANDALA BENDESA{" "}
        </Box>
        Co-Founder
      </Box>
    </Container>
  );
};

export default AboutUs;
