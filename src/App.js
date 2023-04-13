import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { extendTheme } from "@chakra-ui/react";
import AboutUs from "./pages/aboutus";
import Sidebar from "./components/organism/sidebar/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";

import Tipe from "./pages/tipe";
import Budget from "./pages/budget.js";
import Rekomendasi from "./pages/search";
import axios from "axios";

const theme = extendTheme({
  components: {
    Drawer: {
      variants: {
        permanent: {
          parts: ["dialog, dialogContainer"],
          dialog: {
            pointerEvents: "auto",
          },
          dialogContainer: {
            pointerEvents: "none",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Box
            mt="0"
            position="fixed"
            width="100%"
            py="5"
            border="1px"
            borderColor="#ABABAB"
            bgColor="#26B893"
            zIndex={1000}
          >
            <Flex>
              <Box></Box>
              <Spacer />
              <Box fontWeight="bold" fontSize="2xl" color="white" ml="380px">
                Tempat Rekomendasi Wisata Kopi Di Bali
              </Box>
              <Spacer />
              <Box>
                <Box
                  mr="10"
                  w="12"
                  rounded="full"
                  h="12"
                  bgColor="#26B893"
                ></Box>
              </Box>
            </Flex>
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Rekomendasi />} />
            <Route path="/tipe" element={<Tipe />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Box mt="100px" width="100%" backgroundColor="#26B893" padding="42">
            <Flex mb="50">
              <Spacer />
              <Box mt="9">
                Copyright UI/UX Designer 2022 || Gde Agung Mandala Bendesa
                <Spacer />
              </Box>
              <Image ml="10px" objectFit="contain" src="/logo.png" />
            </Flex>
          </Box>
          <Sidebar />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
