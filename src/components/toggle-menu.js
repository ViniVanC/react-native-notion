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
      <Modal.Content bg={useColorModeValue("light.default", "dark.default")}>
        <Modal.Body>
          <ScrollView horizontal>
            <HStack space={3} justifyContent={"center"}>
              <ToggleMenuItem onPress={handleOpenModal}>
                <Icon
                  color={useColorModeValue("light.default", "dark.default")}
                  as={<Feather name="folder-plus" />}
                  size="lg"
                />
              </ToggleMenuItem>
              <ToggleMenuItem onPress={handleReminderModal}>
                <Icon
                  color={useColorModeValue("light.default", "dark.default")}
                  as={<Feather name="clock" />}
                  size="lg"
                />
              </ToggleMenuItem>
            </HStack>
          </ScrollView>
          {reminder !== "" && (
            <HStack space={1.5} mt={3} justifyContent={"center"}>
              <Text
                color={useColorModeValue("dark.default", "light.default")}
                fontFamily={"eUkraine-Regular"}
                fontSize={16}
              >
                {reminderDateTime.toLocaleTimeString("uk-UA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Text
                color={useColorModeValue("dark.default", "light.default")}
                fontFamily={"eUkraine-Regular"}
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
