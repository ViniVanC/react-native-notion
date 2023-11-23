import React from "react";
import { useColorModeValue, Pressable } from "native-base";

const ToggleMenuItem = ({ children, onPress }) => {
  return (
    <Pressable
      bg={useColorModeValue("dark.default", "light.default")}
      _pressed={{
        bg: useColorModeValue("dark.defaultOpacity", "light.defaultOpacity"),
      }}
      p={3}
      rounded={50}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default ToggleMenuItem;
