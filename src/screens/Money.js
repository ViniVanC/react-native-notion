import * as React from "react";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
  useColorModeValue,
} from "native-base";
import NavBar from "../components/navbar";
import { Masthead } from "../components/masthead";
import AnimatedColorBox from "../components/animated-color-box";
import { Feather } from "@expo/vector-icons";
import MoneyList from "../components/money-list";
import { useSelector } from "react-redux";

export function Money() {
  const data = useSelector((state) => state.money);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("light.default", "dark.default")}
      w="full"
    >
      <Masthead
        title={
          <Text
            color={useColorModeValue("dark.default", "light.default")}
            fontSize={"4xl"}
            fontWeight={"bold"}
          >
            Money
          </Text>
        }
      >
        <NavBar />
      </Masthead>
      <HStack p={5} pb={2} alignItems={"flex-end"} justifyContent={"center"}>
        <Text
          fontSize={30}
          pb={3.5}
          pr={1}
          color={useColorModeValue("dark.default", "light.default")}
        >
          $
        </Text>
        <Text
          fontSize={60}
          fontWeight={"bold"}
          color={useColorModeValue("dark.default", "light.default")}
        >
          {data.value}
        </Text>
        <Icon
          color={useColorModeValue("dark.default", "light.default")}
          as={<Feather name="edit" />}
          mb={5}
          ml={1}
          opacity={0.7}
          size={"15px"}
        />
      </HStack>
      <HStack justifyContent={"center"} space={5}>
        <Pressable
          p={3}
          rounded={"full"}
          bg={"blueGreen"}
          borderWidth={3}
          borderColor={useColorModeValue("dark.default", "light.default")}
          _pressed={{
            opacity: 0.5,
          }}
        >
          <Icon
            as={Feather}
            name={"arrow-up"}
            size="md"
            color={useColorModeValue("dark.default", "light.default")}
          />
        </Pressable>
        <Pressable
          p={3}
          rounded={"full"}
          bg={"red"}
          borderWidth={3}
          borderColor={useColorModeValue("dark.default", "light.default")}
          _pressed={{
            opacity: 0.5,
          }}
        >
          <Icon
            as={Feather}
            name={"arrow-down"}
            size="md"
            color={useColorModeValue("dark.default", "light.default")}
          />
        </Pressable>
      </HStack>
      <MoneyList data={data} />
    </AnimatedColorBox>
  );
}
