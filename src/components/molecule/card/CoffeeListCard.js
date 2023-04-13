import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";

const translationMap = {
  SCENERY_MOUNTAINS: "Pegunungan",
  SCENERY_URBAN: "Perkotaan",
  SCENERY_BEACH: "Pantai",
  TYPE_ANGKRINGAN: "Angkringan",
  TYPE_WARUNG: "Warung",
  TYPE_MODERN: "Modern",
};

const CoffeeListCard = ({
  name,
  description,
  scenery,
  type,
  budget,
  onClickModal,
  topImgUrl,
  innerImgUrl,
}) => {
  return (
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
        <Image
          mr="10"
          w="14"
          rounded="full"
          h="14"
          bgColor="gray"
          src={topImgUrl}
          objectFit="cover"
        />
        <Box>
          <Box ml="-2px" fontWeight="bold" fontSize="2xl">
            {name}
          </Box>
          {/* <Box textColor="#ABABAB">{description}</Box> */}
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
          <Image
            mr="10"
            w="36"
            rounded="full"
            h="36"
            bgColor="gray"
            src={innerImgUrl}
            objectFit="cover"
          />
          <Box>
            <Box textColor="#ABABAB" fontWeight="bold">
              {translationMap[scenery] ? translationMap[scenery] : scenery}
            </Box>
            <Box textColor="#ABABAB">
              {translationMap[type] ? translationMap[type] : type}
            </Box>
            <Box ml="-2px" fontWeight="bold" fontSize="4xl" textColor="#26B893">
              Rp. {budget}
            </Box>
            <>
              <Button
                mt="5px"
                colorScheme="blue"
                onClick={() =>
                  onClickModal(
                    name,
                    description,
                    scenery,
                    type,
                    budget,
                    topImgUrl,
                    innerImgUrl
                  )
                }
              >
                Detail
              </Button>
            </>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CoffeeListCard;
