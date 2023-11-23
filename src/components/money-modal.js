import React, { useState } from "react";
import {
  Modal,
  useColorModeValue,
  Pressable,
  VStack,
  Icon,
  Input,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateExpense } from "../redux/actions/todoActions";

const MoneyModal = ({ moneyModal, statusTransaction, closeMoneyModal }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleAmount = (e) => {
    setAmount(e.nativeEvent.text);
  };

  const saveAmount = () => {
    dispatch(updateExpense(amount, statusTransaction));
    setAmount("");
    closeMoneyModal();
  };

  return (
    <Modal isOpen={moneyModal} onClose={closeMoneyModal} size={"md"}>
      <Modal.Content bg={useColorModeValue("light.default", "dark.default")}>
        <Modal.CloseButton
          bg={useColorModeValue("dark.default", "light.default")}
          rounded={100}
          _icon={{
            color: useColorModeValue("light.default", "dark.default"),
          }}
        />
        <Modal.Header
          bg={useColorModeValue("light.default", "dark.default")}
          borderBottomWidth={0}
          _text={{
            color: useColorModeValue("dark.default", "light.default"),
            fontWeight: "bold",
          }}
        >
          Money
        </Modal.Header>
        <Modal.Body>
          <VStack rounded={5} px={1.5} space={5}>
            <Input
              placeholder="Enter the amount..."
              keyboardType="numeric"
              value={amount}
              variant="unstyled"
              color={useColorModeValue("dark.default", "light.default")}
              fontWeight={"bold"}
              fontSize={"lg"}
              p={0}
              autoFocus
              blurOnSubmit
              onChange={handleAmount}
              onBlur={saveAmount}
            />
          </VStack>
        </Modal.Body>
        <Modal.Footer
          borderTopWidth={0}
          py={2}
          bg={useColorModeValue("light.default", "dark.default")}
        >
          <Pressable
            onPress={saveAmount}
            p={2}
            rounded={50}
            bg={useColorModeValue("dark.default", "light.default")}
            _pressed={{
              bg: useColorModeValue(
                "dark.defaultOpacity",
                "light.defaultOpacity"
              ),
            }}
          >
            <Icon
              color={useColorModeValue("light.default", "dark.default")}
              as={<Feather name="check" />}
              size="sm"
            />
          </Pressable>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default MoneyModal;
