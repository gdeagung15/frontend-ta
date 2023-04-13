import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SidebarButton = ({ leftIcon, text, path }) => {
  return (
    <Button
      variant="ghost"
      leftIcon={leftIcon}
      width="100%"
      justifyContent="flex-start"
      as={Link}
      to={path}
      colorScheme="green"
    >
      {text}
    </Button>
  );
};

export default SidebarButton;
