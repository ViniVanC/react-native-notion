import React, { useReducer } from "react";
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
  Text,
} from "native-base";
import AnimatedCheckbox from "./animated-checkbox";
import SwipeView from "./swipable-view";
import { Feather } from "@expo/vector-icons";

const TaskItem = ({ simultaneousHandlers }) => {
  const [isDone, setIsDone] = useReducer((d) => !d, false);

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

  // const activeTextColor = useToken(
  //   "colors",
  //   useColorModeValue("darkText", "lightText")
  // );
  // const doneTextColor = useToken(
  //   "colors",
  //   useColorModeValue("muted.400", "muted.600")
  // );

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={() => console.log("r")}
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
          <Pressable onPress={setIsDone}>
            <AnimatedCheckbox
              checked={isDone}
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
            />
          </Pressable>
        </Box>

        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          color={useColorModeValue("black.default", "pink.default")}
        >
          Task #1
        </Text>
      </HStack>
    </SwipeView>
  );
};

export default TaskItem;
