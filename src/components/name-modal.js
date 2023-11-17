import React, { useState } from "react";
import { Modal, useColorModeValue, Pressable, Icon, Input } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../redux/actions/todoActions";

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
      <Modal.Content bg={useColorModeValue("pink.default", "black.default")}>
        <Modal.CloseButton
          bg={useColorModeValue("black.default", "pink.default")}
          rounded={100}
          _icon={{
            color: useColorModeValue("pink.default", "black.default"),
          }}
        />
        <Modal.Header
          bg={useColorModeValue("pink.default", "black.default")}
          borderBottomWidth={0}
          _text={{
            color: useColorModeValue("black.default", "pink.default"),
            fontWeight: "bold",
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
            color={useColorModeValue("black.default", "pink.default")}
            fontWeight={"bold"}
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
          bg={useColorModeValue("pink.default", "black.default")}
        >
          <Pressable
            onPress={saveUserName}
            p={2}
            rounded={50}
            bg={useColorModeValue("black.default", "pink.default")}
            _pressed={{
              bg: useColorModeValue(
                "black.defaultOpacity",
                "pink.defaultOpacity"
              ),
            }}
          >
            <Icon
              color={useColorModeValue("pink.default", "black.default")}
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
