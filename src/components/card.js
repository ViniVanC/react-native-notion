import React from "react";
import { Box, HStack, Icon, Text, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";

const Card = ({ children, title, width = "100%", ...props }) => {
  return (
    <Box
      w={width}
      p={3}
      rounded={10}
      borderWidth={3}
      borderColor={useColorModeValue("pink.default", "black.default")}
      {...props}
    >
      <HStack
        pb={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue("pink.default", "black.default")}
      >
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={useColorModeValue("pink.default", "black.default")}
        >
          {title}
        </Text>
        <Icon
          as={Feather}
          name={"arrow-right"}
          size="md"
          color={useColorModeValue("pink.default", "black.default")}
        />
      </HStack>
      {children}
    </Box>
  );
};

export default Card;
