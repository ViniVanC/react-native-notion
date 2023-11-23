import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const createFolder = (state, action) => {
  const newFolder = [...state.folders, action.payload];
  saveDataToStorage({
    userName: state.userName,
    tasks: state.tasks,
    folders: newFolder,
  });
  return {
    ...state,
    folders: newFolder,
  };
};

export const editFolder = (state, action) => {
  const editedFolders = state.folders.map((folder) =>
    folder.id === action.payload.id ? action.payload : folder
  );
  saveDataToStorage({
    userName: state.userName,
    tasks: state.tasks,
    folders: editedFolders,
  });
  return {
    ...state,
    folders: editedFolders,
  };
};

export const addTaskToFolder = (state, action) => {
  const { taskId, folderId } = action.payload;
  const updatedFolders = state.folders.map((folder) => {
    if (folder.id === folderId) {
      return { ...folder, tasks: [...folder.tasks, taskId] };
    }
    return folder;
  });

  const updatedTask = state.tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, folders: [...task.folders, folderId] };
    }
    return task;
  });

  saveDataToStorage({
    userName: state.userName,
    tasks: updatedTask,
    folders: updatedFolders,
  });
  return { ...state, tasks: updatedTask, folders: updatedFolders };
};

export const deleteFolder = (state, action) => {
  const folderToDelete = action.payload;
  if (folderToDelete !== "all") {
    const filteredFolders = state.folders.filter(
      (folder) => folder.id !== folderToDelete
    );

    saveDataToStorage({
      userName: state.userName,
      folders: filteredFolders,
      tasks: state.tasks,
    });
    return {
      ...state,
      folders: filteredFolders,
    };
  }
};

export const addUserName = (state, action) => {
  // Your ADD_USER_NAME logic here
};
