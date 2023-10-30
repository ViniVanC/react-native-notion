import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "native-base";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text color={useColorModeValue("green.default", "black.default")}>
        Dark
      </Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Text color={useColorModeValue("green.default", "black.default")}>
        Light
      </Text>
    </HStack>
  );
};

export default ThemeToggle;
