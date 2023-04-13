import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import CoffeeListCard from "../components/molecule/card/CoffeeListCard";

const translationMap = {
  SCENERY_MOUNTAINS: "Pegunungan",
  SCENERY_URBAN: "Perkotaan",
  SCENERY_BEACH: "Pantai",
  TYPE_ANGKRINGAN: "Angkringan",
  TYPE_WARUNG: "Warung",
  TYPE_MODERN: "Modern",
};

const Rekomendasi = () => {
  const [typeToScenery, setTypeToScenery] = useState(0);
  const [sceneryToBudget, setSceneryToBudget] = useState(0);
  const [typeToBudget, setTypeToBudget] = useState(0);
  const [sceneryPreference, setSceneryPreference] =
    useState("SCENERY_MOUNTAINS");
  const [typePreference, setTypePreference] = useState("TYPE_MODERN");
  const [budgetPreference, setBudgetPreference] = useState(0);
  const [backendData, setBackendData] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalData, setModalData] = useState({
    name: "",
    description: "",
    scenery: "",
    type: "",
    budget: "",
    topImgUrl: "",
    innerImgUrl: "",
  });

  const handleClickDetail = (
    name,
    description,
    scenery,
    type,
    budget,
    topImgUrl,
    innerImgUrl
  ) => {
    setModalData({
      name,
      description,
      scenery,
      type,
      budget,
      topImgUrl,
      innerImgUrl,
    });
    onOpen();
  };

  const submitSearch = () => {
    const data = {
      priorities: {
        typeToScenery: typeToScenery,
        sceneryToBudget: sceneryToBudget,
        typeToBudget: typeToBudget,
      },
      preferences: {
        type: typePreference,
        scenery: sceneryPreference,
        budget: budgetPreference,
      },
    };

    axios
      .post("http://localhost:8080/coffee-destination/recommendation", data)
      .then((res) => setBackendData(res.data.data));
  };

  return (
    <Container maxW="container.lg" mr="134px">
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={modalData.topImgUrl} />
            <Image src={modalData.innerImgUrl} />
            <Text>Budget: Rp. {modalData.budget}</Text>
            <Text>
              Pemandangan:{" "}
              {translationMap[modalData.scenery]
                ? translationMap[modalData.scenery]
                : modalData.scenery}
            </Text>
            <Text>
              Tipe:{" "}
              {translationMap[modalData.type]
                ? translationMap[modalData.type]
                : modalData.type}
            </Text>
            <Text>Deskripsi</Text>
            <Text>{modalData.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
        mr="100px"
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
      <Heading>Pencarian</Heading>
      <Box>
        <Text>Prioritas</Text>
        <FormControl>
          <FormLabel>Tipe vs. Pemandangan</FormLabel>
          <Input
            type="number"
            value={typeToScenery}
            onChange={(e) => setTypeToScenery(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Pemandangan vs. Budget</FormLabel>
          <Input
            type="number"
            value={sceneryToBudget}
            onChange={(e) => setSceneryToBudget(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Tipe vs. Budget</FormLabel>
          <Input
            type="number"
            value={typeToBudget}
            onChange={(e) => setTypeToBudget(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box>
        <Text>Preferensi</Text>
        <RadioGroup value={sceneryPreference} onChange={setSceneryPreference}>
          <Text>Pemandangan</Text>
          <Stack direction="row">
            <Radio value="SCENERY_MOUNTAINS">Pegunungan</Radio>
            <Radio value="SCENERY_BEACH">Pantai</Radio>
            <Radio value="SCENERY_URBAN">Perkotaan</Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup value={typePreference} onChange={setTypePreference}>
          <Text>Tipe</Text>
          <Stack direction="row">
            <Radio value="TYPE_MODERN">Modern</Radio>
            <Radio value="TYPE_ANGKRINGAN">Angkringan</Radio>
            <Radio value="TYPE_WARUNG">Warung</Radio>
          </Stack>
        </RadioGroup>
        <FormControl>
          <FormLabel>Budget</FormLabel>
          <Input
            type="number"
            value={budgetPreference}
            onChange={(e) => setBudgetPreference(e.target.value)}
          />
        </FormControl>
      </Box>
      <Button onClick={submitSearch}>Kirim</Button>
      <Box>
        {backendData.map((v, key) => (
          <CoffeeListCard
            name={v.shop_name}
            budget={v.shop_budget}
            description={v.shop_description}
            scenery={v.shop_scenery}
            type={v.shop_type}
            onClickModal={handleClickDetail}
            innerImgUrl={v.shop_thumbnail_url}
            topImgUrl={v.shop_logo_url}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Rekomendasi;
