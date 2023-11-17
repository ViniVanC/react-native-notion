import React, { useCallback, useState } from "react";
import {
  Pressable,
  Box,
  useColorModeValue,
  Icon,
  Input,
  useToken,
  Text,
} from "native-base";
import AnimatedCheckbox from "./animated-checkbox";
import AnimatedTaskLabel from "./animated-task-label";
import SwipeView from "./swipable-view";
import { Feather } from "@expo/vector-icons";
import ToggleMenu from "./toggle-menu";
import ReminderModal from "./reminder-modal";

const TaskItem = ({
  id,
  reminder,
  isEditing,
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  onChangeSubject,
  onFinishEditing,
  simultaneousHandlers,
  handleOpenModal,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [reminderModal, setReminderModal] = useState(false);

  const highlightColor = useToken(
    "colors",
    useColorModeValue("pink.default", "black.default")
  );
  const boxStroke = useToken(
    "colors",
    useColorModeValue("pink.default", "black.default")
  );

  const checkmarkColor = useToken(
    "colors",
    useColorModeValue("pink.default", "black.default")
  );

  const activeTextColor = useToken(
    "colors",
    useColorModeValue("pink.default", "black.default")
  );
  const doneTextColor = useToken(
    "colors",
    useColorModeValue("pink.defaultOpacity", "black.defaultOpacity")
  );

  const handleChangeSubject = useCallback(
    (e) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject]
  );

  const openToggleMenu = useCallback(() => {
    setToggleMenu(true);
  });
  const closeToggleMenu = useCallback(() => {
    setToggleMenu(false);
  });
  const openReminderModal = useCallback(() => {
    setReminderModal(true);
  });
  const closeReminderModal = useCallback(() => {
    setReminderModal(false);
  });

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
          rounded={10}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <Pressable
        flexDirection="row"
        alignItems="center"
        w="full"
        p={2}
        mt={2}
        rounded={10}
        bg={useColorModeValue("black.default", "pink.default")}
        onLongPress={openToggleMenu}
      >
        <ToggleMenu
          reminder={reminder}
          toggleMenu={toggleMenu}
          closeToggleMenu={closeToggleMenu}
          handleOpenModal={handleOpenModal}
          handleReminderModal={openReminderModal}
        />
        <ReminderModal
          id={id}
          subject={subject}
          reminderModal={reminderModal}
          closeReminderModal={closeReminderModal}
        />
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            color={useColorModeValue("pink.default", "black.default")}
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <>
            {reminder && (
              <Box
                position={"absolute"}
                top={"13px"}
                left={"45px"}
                h={"10px"}
                w={"10px"}
                rounded={50}
                opacity={0.5}
                bg={"red"}
              />
            )}
            <AnimatedTaskLabel
              textColor={activeTextColor}
              inactiveTextColor={doneTextColor}
              strikethrough={isDone}
              onPress={onPressLabel}
            >
              {subject}
            </AnimatedTaskLabel>
          </>
        )}
      </Pressable>
    </SwipeView>
  );
};

export default TaskItem;
