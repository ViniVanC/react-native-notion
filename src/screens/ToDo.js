import React, { useCallback, useState } from "react";
import { Icon, VStack, useColorModeValue, Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/animated-color-box";
import TaskList from "../components/task-list";
import shortid from "shortid";
import { Masthead } from "../components/masthead";
import NavBar from "../components/navbar";

import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask } from "../redux/actions/todoActions";

export function ToDo() {
  const data = useSelector((state) => state.tasks);
  const [editingItemId, setEditingItemId] = useState(null);
  const dispatch = useDispatch();

  const handleToggleTaskItem = useCallback(
    (item) => {
      const updatedTask = { ...item, done: !item.done };
      dispatch(editTask(updatedTask));
    },
    [dispatch]
  );

  const handleChangeTaskItemSubject = useCallback(
    (item, newSubject) => {
      const updatedTask = { ...item, subject: newSubject };
      dispatch(editTask(updatedTask));
    },
    [dispatch]
  );

  const handleFinishEditingTaskItem = useCallback((_item) => {
    setEditingItemId(null);
  }, []);

  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);

  const handleRemoveItem = useCallback(
    (item) => {
      dispatch(deleteTask(item.id));
    },
    [dispatch]
  );

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
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
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
