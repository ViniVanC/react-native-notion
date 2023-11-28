import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const addTask = (state, action) => {
  const updatedTasks = [...state.tasks, action.payload];
  const allFolderIndex = state.folders.findIndex(
    (folder) => folder.id === "all"
  );

  if (allFolderIndex === -1) {
    const newAllFolder = {
      id: "all",
      name: "All",
      tasks: [action.payload.id],
    };
    const modifiedFoldersWithAll = [newAllFolder, ...state.folders];

    saveDataToStorage({
      money: state.money,
      userName: state.userName,
      tasks: updatedTasks,
      folders: modifiedFoldersWithAll,
    });

    return {
      ...state,
      tasks: updatedTasks,
      folders: modifiedFoldersWithAll,
    };
  }

  const updatedAllFolder = {
    ...state.folders[allFolderIndex],
    tasks: [action.payload.id, ...state.folders[allFolderIndex].tasks],
  };
  const modifiedFolders = state.folders.map((folder, index) =>
    index === allFolderIndex ? updatedAllFolder : folder
  );

  saveDataToStorage({
    notes: state.notes,
    money: state.money,
    userName: state.userName,
    tasks: updatedTasks,
    folders: modifiedFolders,
  });

  return { ...state, tasks: updatedTasks, folders: modifiedFolders };
};

export const editTask = (state, action) => {
  const editedTasks = state.tasks.map((task) =>
    task.id === action.payload.id ? action.payload : task
  );
  saveDataToStorage({
    notes: state.notes,
    money: state.money,
    userName: state.userName,
    tasks: editedTasks,
    folders: state.folders,
  });
  return {
    ...state,
    tasks: editedTasks,
  };
};

export const reminderTask = (state, action) => {
  const reminderTasks = state.tasks.map((task) =>
    task.id === action.payload.id
      ? { ...task, reminder: action.payload.reminder }
      : task
  );

  saveDataToStorage({
    notes: state.notes,
    money: state.money,
    userName: state.userName,
    tasks: reminderTasks,
    folders: state.folders,
  });

  return {
    ...state,
    tasks: reminderTasks,
  };
};

export const deleteTask = (state, action) => {
  const taskIdToDelete = action.payload;

  const removeModifiedFolders = state.folders.map((folder) => {
    if (folder.id === "all") {
      return {
        ...folder,
        tasks: folder.tasks.filter((taskId) => taskId !== taskIdToDelete),
      };
    }
    return folder;
  });

  const filteredTasks = state.tasks.filter(
    (task) => task.id !== taskIdToDelete
  );

  saveDataToStorage({
    notes: state.notes,
    money: state.money,
    userName: state.userName,
    tasks: filteredTasks,
    folders: removeModifiedFolders,
  });

  return {
    ...state,
    tasks: filteredTasks,
    folders: removeModifiedFolders,
  };
};
