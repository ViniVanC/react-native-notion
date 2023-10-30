import React from "react";
import {
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
  Icon,
} from "native-base";
import { Feather } from "@expo/vector-icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Icon
        as={Feather}
        name="moon"
        size="md"
        color={useColorModeValue("green.default", "black.default")}
      />
      <Switch
        offTrackColor={useColorModeValue("green.default", "black.default")}
        onTrackColor={useColorModeValue("green.default", "black.default")}
        onThumbColor={useColorModeValue("green.default", "black.default")}
        offThumbColor={useColorModeValue("green.default", "black.default")}
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon
        as={Feather}
        name="sun"
        size="md"
        color={useColorModeValue("green.default", "black.default")}
      />
    </HStack>
  );
};

export default ThemeToggle;
