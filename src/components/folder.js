import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import FolderList from "./folder-list";
import { createFolder } from "../redux/actions/todoActions";
import { Box, HStack, Icon, useColorModeValue } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
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
    <HStack px={"20px"}>
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
      <Box
        h="30px"
        w="30px"
        alignItems={"center"}
        justifyContent={"center"}
        rounded={50}
        p={1}
        bg={useColorModeValue("pink.default", "black.default")}
      >
        <Pressable
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
            color={useColorModeValue("black.default", "pink.default")}
            as={<AntDesign name="plus" />}
            size="sm"
          />
        </Pressable>
      </Box>
    </HStack>
  );
};

export default Folder;