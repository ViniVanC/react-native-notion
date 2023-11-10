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
import Folder from "../components/folder";

export function ToDo() {
  const [editingItemId, setEditingItemId] = useState(null);
  const dispatch = useDispatch();
  const [currentFolder, setCurrentFolder] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskItemId, setTaskItemId] = useState(null);

  const openModal = (id) => {
    setTaskItemId(id);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("black.default", "pink.default")}
      w="full"
    >
      <Masthead title={"ToDo"}>
        <NavBar />
      </Masthead>

      <Folder
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        modalVisible={modalVisible}
        closeModal={closeModal}
        taskItemId={taskItemId}
      />

      <VStack
        flex={1}
        bg={useColorModeValue("black.default", "pink.default")}
        px="20px"
      >
        <TaskList
          currentFolder={currentFolder}
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          openModal={openModal}
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
              folders: ["all"],
            })
          );
          setEditingItemId(id);
          setCurrentFolder("all");
        }}
      />
    </AnimatedColorBox>
  );
}
