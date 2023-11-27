import React from "react";
import {
  useColorModeValue,
  Pressable,
  Text,
  Icon,
  Box,
  HStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";

function MoneyItem({ date, value, status }) {
  return (
    <Pressable flexDirection={"row"} gap={3} alignItems={"center"}>
      <Box
        p={2}
        rounded={"full"}
        bg={`${status === "+" ? "blueGreen" : "red"}`}
        borderWidth={3}
        borderColor={useColorModeValue("dark.default", "light.default")}
        _pressed={{
          borderColor: useColorModeValue(
            "dark.defaultOpacity",
            "light.defaultOpacity"
          ),
        }}
      >
        <Icon
          as={Feather}
          name={`arrow-${status === "+" ? "up" : "down"}`}
          size="md"
          color={useColorModeValue("dark.default", "light.default")}
        />
      </Box>
      <HStack space={2}>
        <Text
          fontFamily={"eUkraine-Regular"}
          fontSize={16}
          color={useColorModeValue("dark.default", "light.default")}
        >
          {date.toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Text>
        {/* <Text
          fontFamily={"eUkraine-Regular"} fontSize={16}
          opacity={0.7}
          color={useColorModeValue("dark.default", "light.default")}
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
