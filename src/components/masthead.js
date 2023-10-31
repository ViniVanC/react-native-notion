import {
  Box,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "native-base";
import React from "react";

export const Masthead = ({
  title,
  image = require("../assets/masthead-bg1.jpg"),
  children,
}) => {
  return (
    <HStack safeArea h={"150px"} pb={5} alignItems={"center"}>
      <Image
        position="absolute"
        left={0}
        top={0}
        opacity={0.4}
        w="full"
        h="150px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      <Box
        position="absolute"
        left={0}
        bottom={0}
        w="full"
        h="150px"
        bg={{
          linearGradient: {
            colors: [
              useColorModeValue("black.default", "green.default"),
              "transparent",
            ],
            start: [1, 1],
            end: [1, 0],
          },
        }}
      />
      {children}
      <Text
        color={useColorModeValue("green.default", "black.default")}
        px={3}
        fontSize={"4xl"}
        bold
      >
        {title}
      </Text>
    </HStack>
  );
};
