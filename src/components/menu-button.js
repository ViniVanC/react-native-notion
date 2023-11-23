import React from "react";
import { Button, Icon, useColorModeValue } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const MenuButton = ({ active, icon, children, ...props }) => {
  return (
    <Button
      size="lg"
      _light={{
        colorScheme: "light",
        _pressed: {
          bg: "#00000020",
        },
        _text: {
          color: active ? "light.default" : "dark.default",
        },
      }}
      _dark={{
        colorScheme: "dark",
        _pressed: {
          bg: "#ffffff20",
        },
        _text: {
          color: active ? "dark.default" : "light.default",
        },
      }}
      bg={
        active
          ? useColorModeValue("dark.default", "light.default")
          : "transparent"
      }
      variant="solid"
      justifyContent="flex-start"
      leftIcon={
        <Icon
          as={FontAwesome5}
          name={icon}
          size="sm"
          opacity={0.6}
          color={
            active
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
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
