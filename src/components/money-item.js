import React from "react";
import {
  useColorModeValue,
  Pressable,
  Text,
  Icon,
  Box,
  HStack,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";

function MoneyItem({ date, value, status }) {
  return (
    <Pressable
      py={2}
      pl={2}
      flexDirection={"row"}
      gap={3}
      alignItems={"center"}
      borderWidth={3}
      borderColor={useColorModeValue("dark.default", "light.default")}
      rounded={15}
      bg={useColorModeValue("dark.default", "light.default")}
    >
      <Box
        position={"absolute"}
        left={5}
        opacity={0.3}
        p={2}
        rounded={"full"}
        bg={`${status === "+" ? "blueGreen" : "red"}`}
        borderWidth={3}
        borderColor={useColorModeValue("light.default", "dark.default")}
        _pressed={{
          borderColor: useColorModeValue(
            "light.defaultOpacity",
            "dark.defaultOpacity"
          ),
        }}
      >
        <Icon
          as={Feather}
          name={`arrow-${status === "+" ? "up" : "down"}`}
          size="md"
          color={useColorModeValue("light.default", "dark.default")}
        />
      </Box>
      <HStack space={2} alignItems={"center"}>
        <Text
          fontFamily={"eUkraine-Bold"}
          fontSize={30}
          color={useColorModeValue("light.default", "dark.default")}
        >
          {date.toLocaleString([], {
            day: "numeric",
          })}
        </Text>
        <VStack>
          <Text
            fontFamily={"eUkraineHead-Regular"}
            fontSize={14}
            opacity={0.8}
            color={useColorModeValue("light.default", "dark.default")}
          >
            {date
              .toLocaleDateString([], { weekday: "long" })
              .split(",")
              .splice(0, 1)}
          </Text>
          <Text
            fontFamily={"eUkraine-Regular"}
            fontSize={16}
            color={useColorModeValue("light.default", "dark.default")}
          >
            {date.toLocaleString([], {
              year: "numeric",
              month: "short",
            })}
          </Text>
        </VStack>
        {/* <Text
          fontFamily={"eUkraine-Regular"} fontSize={16}
          opacity={0.7}
          color={useColorModeValue("light.default", "dark.default")}
        >
          {date.toLocaleTimeString("uk-UA", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text> */}
      </HStack>
      <Text
        ml={"auto"}
        fontFamily={"eUkraine-Regular"}
        fontSize={20}
        color={`${status === "+" ? "blueGreen" : "red"}`}
      >
        {status === "+" ? `+${value}` : `-${value}`}
      </Text>
    </Pressable>
  );
}

export default MoneyItem;
