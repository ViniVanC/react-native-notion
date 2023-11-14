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
      rounded={10}
      borderWidth={3}
      borderColor={
        dark
          ? useColorModeValue("pink.default", "black.default")
          : useColorModeValue("black.default", "pink.default")
      }
      bg={
        dark
          ? useColorModeValue("black.default", "pink.default")
          : useColorModeValue("pink.default", "black.default")
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
            ? useColorModeValue("pink.default", "black.default")
            : useColorModeValue("black.default", "pink.default")
        }
      >
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={
            dark
              ? useColorModeValue("pink.default", "black.default")
              : useColorModeValue("black.default", "pink.default")
          }
        >
          {title}
        </Text>
        <Pressable onPress={() => navigation.navigate(title)}>
          <Icon
            as={Feather}
            name={"arrow-right"}
            size="md"
            color={
              dark
                ? useColorModeValue("pink.default", "black.default")
                : useColorModeValue("black.default", "pink.default")
            }
          />
        </Pressable>
      </HStack>
      {children}
    </Box>
  );
};

export default Card;
