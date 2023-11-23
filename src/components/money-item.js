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
          fontSize={16}
          fontWeight={"bold"}
          color={useColorModeValue("dark.default", "light.default")}
        >
          {date.toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Text>
        {/* <Text
          fontSize={16}
          fontWeight={"bold"}
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
        fontSize={20}
        fontWeight={"bold"}
        color={`${status === "+" ? "blueGreen" : "red"}`}
      >
        {status === "+" ? `+${value}` : `-${value}`}
      </Text>
    </Pressable>
  );
}

export default MoneyItem;
