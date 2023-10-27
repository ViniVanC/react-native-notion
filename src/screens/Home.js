import * as React from "react";
import { Text, Box, useColorModeValue, Center, VStack } from "native-base";
import ThemeToggle from "../components/theme-toggle";
import NavBar from "../components/navbar";

export function Home() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <NavBar />
      <VStack space={5} alignItems="center">
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
