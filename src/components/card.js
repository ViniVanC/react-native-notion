import React from "react";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  Text,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ children, title, width = "100%", dark = false, ...props }) => {
  const navigation = useNavigation();

  return (
    <Box
      w={width}
      p={3}
      pt={1.5}
      rounded={10}
      borderWidth={3}
      borderColor={useColorModeValue("dark.default", "light.default")}
      bg={
        dark
          ? useColorModeValue("dark.default", "light.default")
          : useColorModeValue("light.default", "dark.default")
      }
      {...props}
    >
      <HStack
        pb={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottomWidth={2}
        borderBottomColor={
          dark
            ? useColorModeValue("light.default", "dark.default")
            : useColorModeValue("dark.default", "light.default")
        }
      >
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={
            dark
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
        >
          {title}
        </Text>
        <Pressable
          alignItems={"center"}
          justifyContent={"center"}
          rounded={10}
          p={1}
          bg={
            dark
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
          _pressed={{
            bg: dark
              ? useColorModeValue("light.defaultOpacity", "dark.defaultOpacity")
              : useColorModeValue(
                  "dark.defaultOpacity",
                  "light.defaultOpacity"
                ),
          }}
          onPress={() => navigation.navigate(title)}
        >
          <Icon
            as={Feather}
            name={"arrow-right"}
            size="md"
            color={
              dark
                ? useColorModeValue("dark.default", "light.default")
                : useColorModeValue("light.default", "dark.default")
            }
          />
        </Pressable>
      </HStack>
      {children}
    </Box>
  );
};

export default Card;
