import React from "react";
import { Box, HStack, Icon, Text, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";

const Card = ({ children, title, width = "100%", dark = false, ...props }) => {
  return (
    <Box
      w={width}
      p={3}
      rounded={10}
      borderWidth={3}
      borderColor={
        dark
          ? useColorModeValue("black.default", "pink.default")
          : useColorModeValue("pink.default", "black.default")
      }
      bg={
        dark
          ? useColorModeValue("pink.default", "black.default")
          : useColorModeValue("black.default", "pink.default")
      }
      {...props}
    >
      <HStack
        pb={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottomWidth={2}
        borderBottomColor={
          dark
            ? useColorModeValue("black.default", "pink.default")
            : useColorModeValue("pink.default", "black.default")
        }
      >
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={
            dark
              ? useColorModeValue("black.default", "pink.default")
              : useColorModeValue("pink.default", "black.default")
          }
        >
          {title}
        </Text>
        <Icon
          as={Feather}
          name={"arrow-right"}
          size="md"
          color={
            dark
              ? useColorModeValue("black.default", "pink.default")
              : useColorModeValue("pink.default", "black.default")
          }
        />
      </HStack>
      {children}
    </Box>
  );
};

export default Card;