import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FolderList from "./folder-list";
import { createFolder } from "../redux/actions/todoActions";
import { HStack, Icon, Pressable, useColorModeValue } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import shortid from "shortid";
import FolderPopup from "./folder-popup";

const Folder = ({
  currentFolder,
  setCurrentFolder,
  modalVisible,
  closeModal,
  taskItemId,
}) => {
  const dispatch = useDispatch();
  const [editingItemId, setEditingItemId] = useState(null);

  return (
    <HStack mt={3}>
      <FolderPopup
        editingItemId={editingItemId}
        setEditingItemId={setEditingItemId}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        modalVisible={modalVisible}
        closeModal={closeModal}
        taskItemId={taskItemId}
      />

      <FolderList
        editingItemId={editingItemId}
        setEditingItemId={setEditingItemId}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
      <Pressable
        h="30px"
        w="30px"
        alignItems={"center"}
        justifyContent={"center"}
        rounded={50}
        p={1}
        bg={useColorModeValue("black.default", "pink.default")}
        _pressed={{
          bg: useColorModeValue("black.defaultOpacity", "pink.defaultOpacity"),
        }}
        onPress={() => {
          const id = shortid.generate();
          dispatch(
            createFolder({
              id: id,
              name: "",
              tasks: [],
            })
          );
          setEditingItemId(id);
        }}
      >
        <Icon
          color={useColorModeValue("pink.default", "black.default")}
          as={<AntDesign name="plus" />}
          size="sm"
        />
      </Pressable>
    </HStack>
  );
};

export default Folder;
