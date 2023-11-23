import React, { useCallback } from "react";
import { Modal, useColorModeValue, Pressable, Icon } from "native-base";
import FolderList from "./folder-list";
import { addTaskToFolder } from "../redux/actions/todoActions";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";

const FolderPopup = ({
  editingItemId,
  setEditingItemId,
  currentFolder,
  setCurrentFolder,
  modalVisible,
  closeModal,
  taskItemId,
}) => {
  const dispatch = useDispatch();

  const handleAddTaskToFolder = useCallback(
    (taskId, folderId) => {
      dispatch(addTaskToFolder(taskId, folderId));
    },
    [dispatch]
  );

  return (
    <Modal isOpen={modalVisible} onClose={closeModal} size={"md"}>
      <Modal.Content bg={useColorModeValue("light.default", "dark.default")}>
        <Modal.CloseButton
          bg={useColorModeValue("dark.default", "light.default")}
          rounded={100}
          _icon={{
            color: useColorModeValue("light.default", "dark.default"),
          }}
        />
        <Modal.Header
          bg={useColorModeValue("light.default", "dark.default")}
          borderBottomWidth={0}
          _text={{
            color: useColorModeValue("dark.default", "light.default"),
            fontWeight: "bold",
          }}
        >
          Folders
        </Modal.Header>
        <Modal.Body>
          <FolderList
            horizontalList={false}
            editingItemId={editingItemId}
            setEditingItemId={setEditingItemId}
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
          />
        </Modal.Body>
        <Modal.Footer
          borderTopWidth={0}
          py={2}
          bg={useColorModeValue("light.default", "dark.default")}
        >
          <Pressable
            onPress={() => handleAddTaskToFolder(taskItemId, currentFolder)}
            p={2}
            rounded={50}
            bg={useColorModeValue("dark.default", "light.default")}
            _pressed={{
              bg: useColorModeValue(
                "dark.defaultOpacity",
                "light.defaultOpacity"
              ),
            }}
          >
            <Icon
              color={useColorModeValue("light.default", "dark.default")}
              as={<Feather name="check" />}
              size="sm"
            />
          </Pressable>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default FolderPopup;
