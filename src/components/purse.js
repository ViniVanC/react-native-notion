import React, { useState } from "react";
import { HStack, Icon, Pressable, Text, useColorModeValue } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import MoneyModal from "./money-modal";

export function Purse({ card = false }) {
  const data = useSelector((state) => state.money);
  const [moneyModal, setMoneyModal] = useState(false);
  const [statusTransaction, setStatusTransaction] = useState("");

  const openMoneyModalExpense = () => {
    setMoneyModal(true);
    setStatusTransaction("-");
  };

  const openMoneyModalIncome = () => {
    setMoneyModal(true);
    setStatusTransaction("+");
  };

  const closeMoneyModal = () => {
    setMoneyModal(false);
  };

  return (
    <>
      <HStack py={5} pb={2} alignItems={"flex-end"} justifyContent={"center"}>
        <Text
          fontSize={card ? 20 : 30}
          pb={card ? 2 : 3.5}
          color={
            card
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
        >
          $
        </Text>
        <Text
          fontSize={card ? 30 : 60}
          fontWeight={"bold"}
          color={
            card
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
        >
          {data.value}
        </Text>
        {/* <Icon
          color={useColorModeValue("dark.default", "light.default")}
          as={<Feather name="edit" />}
          mb={5}
          ml={1}
          opacity={0.7}
          size={"15px"}
        /> */}
      </HStack>
      <HStack justifyContent={"center"} space={card ? 2 : 5}>
        <Pressable
          p={3}
          rounded={"full"}
          bg={"blueGreen"}
          borderWidth={3}
          borderColor={
            card
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
          _pressed={{
            opacity: 0.5,
          }}
          onPress={openMoneyModalIncome}
        >
          <Icon
            as={Feather}
            name={"arrow-up"}
            size={card ? "md" : "xl"}
            color={
              card
                ? useColorModeValue("light.default", "dark.default")
                : useColorModeValue("dark.default", "light.default")
            }
          />
        </Pressable>
        <Pressable
          p={3}
          rounded={"full"}
          bg={"red"}
          borderWidth={3}
          borderColor={
            card
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
          _pressed={{
            opacity: 0.5,
          }}
          onPress={openMoneyModalExpense}
        >
          <Icon
            as={Feather}
            name={"arrow-down"}
            size={card ? "md" : "xl"}
            color={
              card
                ? useColorModeValue("light.default", "dark.default")
                : useColorModeValue("dark.default", "light.default")
            }
          />
        </Pressable>
      </HStack>
      <MoneyModal
        moneyModal={moneyModal}
        setMoneyModal={setMoneyModal}
        statusTransaction={statusTransaction}
        closeMoneyModal={closeMoneyModal}
      />
    </>
  );
}
