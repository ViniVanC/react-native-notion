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
        color={useColorModeValue("black.default", "pink.default")}
      />
      <Switch
        offTrackColor={useColorModeValue(
          "black.defaultOpacity",
          "pink.defaultOpacity"
        )}
        onTrackColor={useColorModeValue(
          "black.defaultOpacity",
          "pink.defaultOpacity"
        )}
        onThumbColor={useColorModeValue("black.default", "pink.default")}
        offThumbColor={useColorModeValue("black.default", "pink.default")}
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon
        as={Feather}
        name="sun"
        size="md"
        color={useColorModeValue("black.default", "pink.default")}
      />
    </HStack>
  );
};

export default ThemeToggle;
