import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMountain } from "react-icons/fa";
import SidebarButton from "../../molecule/button/SidebarButton";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      isOpen={true}
      trapFocus={false}
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      placement="left"
    >
      <DrawerContent>
        <DrawerHeader>
          <Image objectFit="contain" src="/logo.png" />
        </DrawerHeader>
        <DrawerBody>
          <Box>
            <Box mt="4">
              <Text>Categories</Text>
            </Box>
            <Box mt="2">
              <SidebarButton
                leftIcon={<FaMountain />}
                text="Rekomendasi"
                path="/search"
              />
              <SidebarButton
                leftIcon={<FaMountain />}
                text="Tipe"
                path="/tipe"
              />
              <SidebarButton
                leftIcon={<FaMountain />}
                text="Budget"
                path="/budget"
              />
              <Box backgroundColor="#88DFC9" padding="50px" mt="300">
                <SidebarButton text="About Us" path="/about" />
              </Box>
            </Box>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
