import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Budget() {
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
      <Flex>
        <Box
          as={Link}
          to="/pegunungan"
          mt="4"
          ml="110px"
          border="2px"
          borderColor="#00000"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
          textAlign="Center"
          w="80"
          fontWeight="bold"
        >
          <Box mt="8">15K - 25K</Box>
          <Image pt="4" pb="3" px="16" src="/uang1.png" />
        </Box>
        <Box
          as={Link}
          to="/sawah"
          mt="4"
          ml="110px"
          border="2px"
          borderColor="#00000"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
          textAlign="Center"
          w="80"
          fontWeight="bold"
        >
          <Box mt="8">20K - 50K</Box>
          <Image pt="4" pb="3" px="16" src="/uang2.png" />
        </Box>
      </Flex>

      <Flex>
        <Box
          as={Link}
          to="/pantai"
          mt="4"
          ml="110px"
          border="2px"
          borderColor="#00000"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
          textAlign="Center"
          w="80"
          fontWeight="bold"
        >
          <Box mt="8">25K - 75K</Box>
          <Image pt="4" pb="3" px="16" src="/uang3.png" />
        </Box>
        <Box
          as={Link}
          to="/danau"
          mt="4"
          ml="110px"
          border="2px"
          borderColor="#00000"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
          textAlign="Center"
          w="80"
          fontWeight="bold"
        >
          <Box mt="8">50K - 100K</Box>
          <Image pt="4" pb="3" px="16" src="/uang4.png" />
        </Box>
      </Flex>
    </Container>
  );
}
