import React, { useState } from "react";
import {
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import MoneyModal from "./money-modal";
import { updatePurse } from "../redux/actions/actions";

export function Purse({ card = false }) {
  const data = useSelector((state) => state.money);
  const dispatch = useDispatch();
  const [moneyModal, setMoneyModal] = useState(false);
  const [statusTransaction, setStatusTransaction] = useState("");
  const [openChangeValueWallet, setOpenChangeValueWallet] = useState(false);
  const [changeValueWallet, setChangeValueWallet] = useState(data.value);

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

  const handleOpenChangeValueWallet = () => {
    setOpenChangeValueWallet(true);
  };
  const handleCloseChangeValueWallet = () => {
    dispatch(updatePurse(changeValueWallet));
    setOpenChangeValueWallet(false);
  };

  return (
    <>
      {openChangeValueWallet ? (
        <Input
          placeholder="Enter value..."
          value={changeValueWallet}
          keyboardType="numeric"
          variant="unstyled"
          color={
            card
              ? useColorModeValue("light.default", "dark.default")
              : useColorModeValue("dark.default", "light.default")
          }
          fontFamily={"eUkraineHead-Bold"}
          fontSize={20}
          py={5}
          pb={2}
          textAlign={"center"}
          autoFocus
          blurOnSubmit
          onChange={(e) => setChangeValueWallet(e.nativeEvent.text)}
          onBlur={handleCloseChangeValueWallet}
        />
      ) : (
        <Pressable
          _pressed={{ opacity: 0.5 }}
          onPress={handleOpenChangeValueWallet}
        >
          <HStack
            py={5}
            pb={2}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            <Text
              fontFamily={"eUkraine-Regular"}
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
              fontFamily={"eUkraine-Regular"}
              fontSize={card ? 30 : 60}
              color={
                card
                  ? useColorModeValue("light.default", "dark.default")
                  : useColorModeValue("dark.default", "light.default")
              }
            >
              {data.value}
            </Text>
            <Icon
              color={useColorModeValue("light.default", "dark.default")}
              as={<Feather name="edit" />}
              mb={5}
              ml={1}
              opacity={0.7}
              size={"15px"}
            />
          </HStack>
        </Pressable>
      )}
      <HStack mb={3} justifyContent={"center"} space={card ? 2 : 5}>
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
