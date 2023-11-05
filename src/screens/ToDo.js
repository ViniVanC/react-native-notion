import React, { useState } from "react";
import { Icon, VStack, useColorModeValue, Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import TaskList from "../components/task-list";
import shortid from "shortid";
import { Masthead } from "../components/masthead";
import NavBar from "../components/navbar";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/todoActions";

export function ToDo() {
  const [editingItemId, setEditingItemId] = useState(null);
  const dispatch = useDispatch();

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("black.default", "pink.default")}
      w="full"
    >
      <Masthead title={"ToDo"}>
        <NavBar />
      </Masthead>

      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue("black.default", "pink.default")}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        p="20px"
      >
        <TaskList
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={
          <Icon
            color={useColorModeValue("black.default", "pink.default")}
            as={<AntDesign name="plus" />}
            size="sm"
          />
        }
        bg={useColorModeValue("pink.default", "black.default")}
        onPress={() => {
          const id = shortid.generate();
          dispatch(
            addTask({
              id,
              subject: "",
              done: false,
            })
          );
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}
