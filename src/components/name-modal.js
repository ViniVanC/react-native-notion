import React, { useState } from "react";
import { Modal, useColorModeValue, Pressable, Icon, Input } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../redux/actions/actions";

const NameModal = ({ nameModal, closeNameModal }) => {
  const userNameData = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.nativeEvent.text);
  };

  const saveUserName = () => {
    dispatch(addUserName(userName.trim()));
    setUserName("");
    closeNameModal();
  };

  return (
    <Modal isOpen={nameModal} onClose={closeNameModal} size={"lg"}>
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
            fontFamily: "eUkraineHead-Bold",
            fontSize: "14px",
          }}
        >
          {userNameData === ""
            ? "What is your name?"
            : "What new name do you want?"}
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Enter name..."
            value={userName}
            variant="unstyled"
            color={useColorModeValue("dark.default", "light.default")}
            fontFamily={"eUkraine-Regular"}
            fontSize={"lg"}
            p={0}
            autoFocus
            blurOnSubmit
            onChange={handleUserName}
            onBlur={saveUserName}
          />
        </Modal.Body>
        <Modal.Footer
          borderTopWidth={0}
          py={2}
          bg={useColorModeValue("light.default", "dark.default")}
        >
          <Pressable
            onPress={saveUserName}
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

export default NameModal;
