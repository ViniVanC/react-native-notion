import React from "react";
import { useColorModeValue, Pressables } from "native-base";

const ToggleMenuItem = ({ children, onPress }) => {
  return (
    <Pressable
      bg={useColorModeValue("black.default", "pink.default")}
      _pressed={{
        bg: useColorModeValue("black.defaultOpacity", "pink.defaultOpacity"),
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
