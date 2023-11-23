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
        color={useColorModeValue("dark.default", "light.default")}
      />
      <Switch
        offTrackColor={useColorModeValue(
          "dark.defaultOpacity",
          "light.defaultOpacity"
        )}
        onTrackColor={useColorModeValue(
          "dark.defaultOpacity",
          "light.defaultOpacity"
        )}
        onThumbColor={useColorModeValue("dark.default", "light.default")}
        offThumbColor={useColorModeValue("dark.default", "light.default")}
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon
        as={Feather}
        name="sun"
        size="md"
        color={useColorModeValue("dark.default", "light.default")}
      />
    </HStack>
  );
};

export default ThemeToggle;
