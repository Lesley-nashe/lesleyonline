import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <Flex  background={"#87CEEB"} width={"100%"}>
      <Flex width={"100%"} direction={"row"}>
        <Flex p={4} direction={"column"} width={"100%"}>
          <Text color={"black"}>
            © Copyright Supersonic. All rights reserved.
          </Text>
        </Flex>
        <Flex justifyContent={"flex-end"}>
          <Flex
            gap={4}
            alignContent={"center"}
            px={8}
            py={4}
            direction={"row"}
          >
            <FacebookLogo color="black" size={32} />
            <XLogo color="black" size={32} />
            <InstagramLogo color="black" size={32} />
            <LinkedinLogo color="black" size={32} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
