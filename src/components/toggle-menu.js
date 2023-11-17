import React from "react";
import {
  Modal,
  useColorModeValue,
  Pressable,
  Text,
  VStack,
  HStack,
  Icon,
  ScrollView,
} from "native-base";
import ToggleMenuItem from "./toggle-menu-item";
import { Feather } from "@expo/vector-icons";

const ToggleMenu = ({
  reminder,
  toggleMenu,
  closeToggleMenu,
  handleOpenModal,
  handleReminderModal,
}) => {
  const reminderDateTime = new Date(reminder);

  return (
    <Modal isOpen={toggleMenu} onClose={closeToggleMenu} size="xs">
      <Modal.Content bg={useColorModeValue("pink.default", "black.default")}>
        <Modal.Body>
          <ScrollView horizontal>
            <HStack space={3} justifyContent={"center"}>
              <ToggleMenuItem onPress={handleOpenModal}>
                <Icon
                  color={useColorModeValue("pink.default", "black.default")}
                  as={<Feather name="folder-plus" />}
                  size="lg"
                />
              </ToggleMenuItem>
              <ToggleMenuItem onPress={handleReminderModal}>
                <Icon
                  color={useColorModeValue("pink.default", "black.default")}
                  as={<Feather name="clock" />}
                  size="lg"
                />
              </ToggleMenuItem>
            </HStack>
          </ScrollView>
          {reminder !== "" && (
            <HStack space={1.5} mt={3} justifyContent={"center"}>
              <Text
                color={useColorModeValue("black.default", "pink.default")}
                fontSize={16}
                fontWeight={"bold"}
              >
                {reminderDateTime.toLocaleTimeString("uk-UA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Text
                color={useColorModeValue("black.default", "pink.default")}
                fontSize={16}
                opacity={0.7}
              >
                {reminderDateTime.toLocaleString([], {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </Text>
            </HStack>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ToggleMenu;
