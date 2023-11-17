import React from "react";
import {
  Modal,
  useColorModeValue,
  Pressable,
  Text,
  VStack,
  HStack,
} from "native-base";

const ToggleMenu = ({
  reminder,
  toggleMenu,
  closeToggleMenu,
  handleOpenModal,
  handleReminderModal,
}) => {
  return (
    <Modal isOpen={toggleMenu} onClose={closeToggleMenu} size={"md"}>
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
          Options
        </Modal.Header>
        <Modal.Body>
          <VStack rounded={5} px={1.5} space={1.5}>
            {typeof reminder !== "string" && (
              <HStack space={1.5}>
                <Text
                  color={useColorModeValue("black.default", "pink.default")}
                  fontSize={16}
                >
                  Reminder:
                </Text>
                <Text
                  color={useColorModeValue("black.default", "pink.default")}
                  fontSize={16}
                  fontWeight={"bold"}
                >
                  {reminder.toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
                <Text
                  color={useColorModeValue("black.default", "pink.default")}
                  fontSize={16}
                  opacity={0.7}
                >
                  {reminder.toLocaleString([], {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </Text>
              </HStack>
            )}
            <Pressable
              bg={useColorModeValue("black.default", "pink.default")}
              _pressed={{
                bg: useColorModeValue(
                  "black.defaultOpacity",
                  "pink.defaultOpacity"
                ),
              }}
              flex={1}
              flexDirection="row"
              py={1.5}
              px={2}
              rounded={5}
              onPress={handleOpenModal}
            >
              <Text
                fontSize={"lg"}
                fontWeight={"bold"}
                color={useColorModeValue("pink.default", "black.default")}
              >
                Add to folder
              </Text>
            </Pressable>
            <Pressable
              bg={useColorModeValue("black.default", "pink.default")}
              _pressed={{
                bg: useColorModeValue(
                  "black.defaultOpacity",
                  "pink.defaultOpacity"
                ),
              }}
              flex={1}
              flexDirection="row"
              py={1.5}
              px={2}
              rounded={5}
              onPress={handleReminderModal}
            >
              <Text
                fontSize={"lg"}
                fontWeight={"bold"}
                color={useColorModeValue("pink.default", "black.default")}
              >
                Schedule a reminder
              </Text>
            </Pressable>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ToggleMenu;
