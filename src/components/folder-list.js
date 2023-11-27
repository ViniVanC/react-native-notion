import React, { useCallback } from "react";
import { ScrollView } from "native-base";
import FolderItem from "./folder-item";
import { useDispatch, useSelector } from "react-redux";
import { makeStyledComponent } from "../utils/styled";
import { deleteFolder, editFolder } from "../redux/actions/actions";
import { AnimatePresence, View } from "moti";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export const AnimatedFolderItem = ({
  data,
  isEditing,
  onChangeName,
  onFinishEditing,
  onRemove,
  currentFolder,
  setCurrentFolder,
}) => {
  const handleChangeName = useCallback(
    (name) => {
      onChangeName(data, name);
    },
    [data, onChangeName]
  );

  const handleFinishEditing = useCallback(() => {
    onFinishEditing(data);
  }, [data, onFinishEditing]);

  const handleRemoveFolder = useCallback(() => {
    onRemove(data);
  }, [data, onRemove]);

  return (
    <StyledView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginRight: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
    >
      <FolderItem
        id={data.id}
        name={data.name}
        isEditing={isEditing}
        onChangeName={handleChangeName}
        onFinishEditing={handleFinishEditing}
        onRemoveFolder={handleRemoveFolder}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
    </StyledView>
  );
};

function FolderList({
  horizontalList = true,
  editingItemId,
  setEditingItemId,
  currentFolder,
  setCurrentFolder,
}) {
  const data = useSelector((state) => state.folders);
  const dispatch = useDispatch();

  const handleChangeFolderName = useCallback(
    (item, newName) => {
      const updatedFolder = { ...item, name: newName };
      dispatch(editFolder(updatedFolder));
    },
    [dispatch]
  );

  const handleFinishEditingFolder = useCallback((_item) => {
    setEditingItemId(null);
  }, []);

  const removeFolder = useCallback(
    (folder) => {
      dispatch(deleteFolder(folder.id));
    },
    [dispatch]
  );

  return (
    <StyledScrollView horizontal={horizontalList}>
      <AnimatePresence>
        {data.map((item) => (
          <AnimatedFolderItem
            key={item.id}
            data={item}
            isEditing={item.id === editingItemId}
            onChangeName={handleChangeFolderName}
            onFinishEditing={handleFinishEditingFolder}
            onRemove={removeFolder}
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
          />
        ))}
      </AnimatePresence>
    </StyledScrollView>
  );
}

export default FolderList;
