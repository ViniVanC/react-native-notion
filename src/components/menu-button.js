import React from "react";
import { Button, Icon, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";

const MenuButton = ({ active, icon, children, ...props }) => {
  return (
    <Button
      size="lg"
      _light={{
        colorScheme: "green",
        _pressed: {
          bg: "#ffffff20",
        },
        _text: {
          color: active ? "black.default" : "green.default",
        },
      }}
      _dark={{
        colorScheme: "black",
        _pressed: {
          bg: "#ffffff20",
        },
        _text: {
          color: active ? "green.default" : "black.default",
        },
      }}
      bg={
        active
          ? useColorModeValue("green.default", "black.default")
          : "transparent"
      }
      borderColor={
        active
          ? useColorModeValue("green.default", "black.default")
          : "transparent"
      }
      borderWidth={2}
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
              ? useColorModeValue("black.default", "green.default")
              : useColorModeValue("green.default", "black.default")
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
