import { Box, Heading, Image, VStack, useColorModeValue } from "native-base";
import React from "react";

export const Masthead = ({
  title,
  image = require("../assets/masthead-bg1.jpg"),
  children,
}) => {
  return (
    <VStack h={"220px"} pb={5}>
      <Image
        position="absolute"
        left={0}
        top={0}
        opacity={0.4}
        w="full"
        h="220px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      <Box
        position="absolute"
        left={0}
        bottom={0}
        w="full"
        h="220px"
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
      <Box flex={1} />
      <Heading
        color={useColorModeValue("green.default", "black.default")}
        px={6}
        size={"2xl"}
      >
        {title}
      </Heading>
    </VStack>
  );
};
