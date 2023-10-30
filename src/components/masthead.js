import { Box, Heading, VStack, useColorModeValue } from "native-base";
import React from "react";

export const Masthead = ({ title, children }) => {
  return (
    <VStack h={"100px"} pb={5}>
      {children}
      <Box flex={1} />
      <Heading
        color={useColorModeValue("green.default", "black.default")}
        p={6}
        size={"x3"}
      >
        {title}
      </Heading>
    </VStack>
  );
};
