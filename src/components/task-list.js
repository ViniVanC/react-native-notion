import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, View } from "moti";
import { ScrollView } from "react-native-gesture-handler";
import TaskItem from "./task-item";
import { makeStyledComponent } from "../utils/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  editTask,
  deleteTask,
  addTask,
  createFolder,
} from "../redux/actions/todoActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

export const AnimatedTaskItem = ({
  simultaneousHandlers,
  data,
  isEditing,
  onToggleItem,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onRemove,
  openModal,
}) => {
  const handleToggleCheckbox = useCallback(() => {
    onToggleItem(data);
  }, [data, onToggleItem]);

  const handleChangeSubject = useCallback(
    (subject) => {
      onChangeSubject(data, subject);
    },
    [data, onChangeSubject]
  );

  const handleFinishEditing = useCallback(() => {
    onFinishEditing(data);
  }, [data, onFinishEditing]);

  const handlePressLabel = useCallback(() => {
    onPressLabel(data);
  }, [data, onPressLabel]);

  const handleRemove = useCallback(() => {
    onRemove(data);
  }, [data, onRemove]);

  const handleOpenModal = useCallback(() => {
    openModal(data.id);
  }, [data, openModal]);

  return (
    <StyledView
      w="full"
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
    >
      <TaskItem
        simultaneousHandlers={simultaneousHandlers}
        subject={data.subject}
        isDone={data.done}
        isEditing={isEditing}
        onToggleCheckbox={handleToggleCheckbox}
        onChangeSubject={handleChangeSubject}
        onFinishEditing={handleFinishEditing}
        onPressLabel={handlePressLabel}
        onRemove={handleRemove}
        handleOpenModal={handleOpenModal}
      />
    </StyledView>
  );
};

export default function TaskList({
  editingItemId,
  setEditingItemId,
  currentFolder,
  openModal,
}) {
  const refScrollView = useRef(null);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const loadTasksFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem("todoData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        parsedData.folders.forEach((folder) => dispatch(createFolder(folder)));
        parsedData.tasks.forEach((task) => dispatch(addTask(task)));
      }
    } catch (error) {
      console.error("Помилка завантаження f&t:", error);
    }
  };

  useEffect(() => {
    if (data.folders.length >= 0 && data.folders.length <= 1) {
      loadTasksFromStorage();
    }
  }, []);

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
    <StyledScrollView ref={refScrollView} w="full">
      <AnimatePresence>
        {data.tasks
          .filter((item) => item.folders.includes(currentFolder))
          .map((item) => (
            <AnimatedTaskItem
              key={item.id}
              data={item}
              simultaneousHandlers={refScrollView}
              isEditing={item.id === editingItemId}
              onToggleItem={handleToggleTaskItem}
              onChangeSubject={handleChangeTaskItemSubject}
              onFinishEditing={handleFinishEditingTaskItem}
              onPressLabel={handlePressTaskItemLabel}
              onRemove={handleRemoveItem}
              openModal={openModal}
            />
          ))}
      </AnimatePresence>
    </StyledScrollView>
  );
}
