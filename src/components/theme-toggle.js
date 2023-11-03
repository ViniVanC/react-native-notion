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
        color={useColorModeValue("pink.default", "black.default")}
      />
      <Switch
        offTrackColor={useColorModeValue(
          "pink.defaultOpacity",
          "black.defaultOpacity"
        )}
        onTrackColor={useColorModeValue(
          "pink.defaultOpacity",
          "black.defaultOpacity"
        )}
        onThumbColor={useColorModeValue("pink.default", "black.default")}
        offThumbColor={useColorModeValue("pink.default", "black.default")}
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon
        as={Feather}
        name="sun"
        size="md"
        color={useColorModeValue("pink.default", "black.default")}
      />
    </HStack>
  );
};

export default ThemeToggle;
