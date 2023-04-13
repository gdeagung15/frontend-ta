import {
  Container,
  Heading,
  Box,
  Drawer,
  Text,
  Flex,
  AlertDialogCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Image } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import CoffeeListCard from "../components/molecule/card/CoffeeListCard";
import data from "../data/coffee-shop.json";

const Home = () => {
  return (
    <Container maxW="container.lg">
      <Button
        ml="110px"
        mt="100px"
        border="4px"
        leftIcon={<AiFillHome />}
        colorScheme="teal"
        variant="solid"
        rounded="xl"
        path="/"
      >
        Home
      </Button>
      <Box ml="150px">
        <Box padding="5"> SARAN</Box>
      </Box>

      {/* {data.map((item) => (
        <CoffeeListCard
          name={item.name}
          address={item.address}
          budget={item.budget}
          scenery={item.scenery}
          type={item.type}
        />
      ))} */}
      {/* 
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>scs</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal> }
      {/* <Box
        ml="150px"
        mt="10px"
        border="2px"
        borderColor="white"
        padding="10"
        colorScheme="teal"
        variant="outline"
        backgroundColor="white"
        rounded="xl"
        boxShadow="lg"
      >
        <Flex>
          <Box mr="10" w="14" rounded="full" h="14" bgColor="gray"></Box>
          <Box>
            <Box ml="-2px" fontWeight="bold" fontSize="2xl">
              Tegu Kopi
            </Box>
            <Box textColor="#ABABAB">
              Jl. Raya Penelokan Batur Tengah, Kec. Kintamani, Kabupaten Bangli
            </Box>
          </Box>
        </Flex>
        <Box
          ml="80px"
          mt="5px"
          border="4px"
          borderColor="#00000"
          padding="10"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
        >
          <Flex>
            <Box mr="10" w="36" rounded="full" h="36" bgColor="gray"></Box>
            <Box>
              <Box textColor="#ABABAB" fontWeight="bold">
                Pemandangan Pegunungan
              </Box>
              <Box textColor="#ABABAB">Coffee Shop Modern</Box>
              <Box
                ml="-2px"
                fontWeight="bold"
                fontSize="4xl"
                textColor="#26B893"
              >
                Start From 25K - 60K
              </Box>
              <>
                <Button mt="5px" colorScheme="blue" onClick={onOpen}>
                  Detail
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>scs</ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        ml="150px"
        mt="10px"
        border="2px"
        borderColor="white"
        padding="10"
        colorScheme="teal"
        variant="outline"
        backgroundColor="white"
        rounded="xl"
        boxShadow="lg"
      >
        <Flex>
          <Box mr="10" w="14" rounded="full" h="14" bgColor="gray"></Box>
          <Box>
            <Box ml="-2px" fontWeight="bold" fontSize="2xl">
              Tegu Kopi
            </Box>
            <Box textColor="#ABABAB">
              Jl. Raya Penelokan Batur Tengah, Kec. Kintamani, Kabupaten Bangli
            </Box>
          </Box>
        </Flex>

        <Box
          ml="80px"
          mt="5px"
          border="4px"
          borderColor="#00000"
          padding="10"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
        >
          <Flex>
            <Box mr="10" w="36" rounded="full" h="36" bgColor="gray"></Box>
            <Box>
              <Box textColor="#ABABAB" fontWeight="bold">
                Pemandangan Pegunungan
              </Box>
              <Box textColor="#ABABAB">Coffee Shop Modern</Box>
              <Box
                ml="-2px"
                fontWeight="bold"
                fontSize="4xl"
                textColor="#26B893"
              >
                Start From 25K - 60K
              </Box>
              <>
                <Button mt="5px" colorScheme="blue" onClick={onOpen}>
                  Detail
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>scs</ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        ml="150px"
        mt="10px"
        border="2px"
        borderColor="white"
        padding="10"
        colorScheme="teal"
        variant="outline"
        backgroundColor="white"
        rounded="xl"
        boxShadow="lg"
      >
        <Flex>
          <Box mr="10" w="14" rounded="full" h="14" bgColor="gray"></Box>
          <Box>
            <Box ml="-2px" fontWeight="bold" fontSize="2xl">
              Tegu Kopi
            </Box>
            <Box textColor="#ABABAB">
              Jl. Raya Penelokan Batur Tengah, Kec. Kintamani, Kabupaten Bangli
            </Box>
          </Box>
        </Flex>
        <Box
          ml="80px"
          mt="5px"
          border="4px"
          borderColor="#00000"
          padding="10"
          colorScheme="teal"
          variant="outline"
          backgroundColor="white"
          rounded="xl"
        >
          <Flex>
            <Box mr="10" w="36" rounded="full" h="36" bgColor="gray"></Box>
            <Box>
              <Box textColor="#ABABAB" fontWeight="bold">
                Pemandangan Pegunungan
              </Box>
              <Box textColor="#ABABAB">Coffee Shop Modern</Box>
              <Box
                ml="-2px"
                fontWeight="bold"
                fontSize="4xl"
                textColor="#26B893"
              >
                Start From 25K - 60K
              </Box>
              <>
                <Button mt="5px" colorScheme="blue" onClick={onOpen}>
                  Detail
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>scs</ModalBody>
                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            </Box>
          </Flex>
        </Box>
      </Box> */}
    </Container>
  );
};

export default Home;
