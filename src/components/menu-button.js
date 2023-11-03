import React from "react";
import { Button, Icon, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";

const MenuButton = ({ active, icon, children, ...props }) => {
  return (
    <Button
      size="lg"
      _light={{
        colorScheme: "pink",
        _pressed: {
          bg: "#ffffff20",
        },
        _text: {
          color: active ? "black.default" : "pink.default",
        },
      }}
      _dark={{
        colorScheme: "black",
        _pressed: {
          bg: "#ffffff20",
        },
        _text: {
          color: active ? "pink.default" : "black.default",
        },
      }}
      bg={
        active
          ? useColorModeValue("pink.default", "black.default")
          : "transparent"
      }
      variant="solid"
      justifyContent="flex-start"
      leftIcon={
        <Icon
          as={Feather}
          name={icon}
          size="sm"
          opacity={0.6}
          color={
            active
              ? useColorModeValue("black.default", "pink.default")
              : useColorModeValue("pink.default", "black.default")
          }
        />
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
