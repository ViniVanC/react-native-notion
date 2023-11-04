import React, { useCallback } from "react";
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
} from "native-base";
import AnimatedCheckbox from "./animated-checkbox";
import AnimatedTaskLabel from "./animated-task-label";
import SwipeView from "./swipable-view";
import { Feather } from "@expo/vector-icons";

const TaskItem = ({
  isEditing,
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  onChangeSubject,
  onFinishEditing,
  simultaneousHandlers,
}) => {
  const highlightColor = useToken(
    "colors",
    useColorModeValue("black.default", "pink.default")
  );
  const boxStroke = useToken(
    "colors",
    useColorModeValue("black.default", "pink.default")
  );

  const checkmarkColor = useToken(
    "colors",
    useColorModeValue("black.default", "pink.default")
  );

  const activeTextColor = useToken(
    "colors",
    useColorModeValue("black.default", "pink.default")
  );
  const doneTextColor = useToken(
    "colors",
    useColorModeValue("black.defaultOpacity", "pink.defaultOpacity")
  );

  const handleChangeSubject = useCallback(
    (e) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject]
  );

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
      <HStack
        alignItems="center"
        w="full"
        p={2}
        mt={2}
        rounded={10}
        bg={useColorModeValue("pink.default", "black.default")}
      >
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
            color={useColorModeValue("black.default", "pink.default")}
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  );
};

export default TaskItem;
