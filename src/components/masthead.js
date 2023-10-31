import { Box, Heading, Image, VStack, useColorModeValue } from "native-base";
import React from "react";

export const Masthead = ({ title, image, children }) => {
  return (
    <VStack h={300} pb={5}>
      <Image
        position="absolute"
        left={0}
        top={0}
        opacity={0.2}
        w="full"
        h="300px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      <Box
        position="absolute"
        left={0}
        bottom={0}
        w="full"
        h="300px"
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
