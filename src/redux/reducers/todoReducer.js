import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  tasks: [],
  folders: [{ id: "all", name: "All", tasks: [] }],
};

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("todoData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedTasks = [...state.tasks, action.payload];

      const allFolderIndex = state.folders.findIndex(
        (folder) => folder.id === "all"
      );
      const allFolder = state.folders[allFolderIndex];
      const updatedAllFolder = {
        ...allFolder,
        tasks: [action.payload.id, ...allFolder.tasks],
      };

      const modifiedFolders = [...state.folders];
      modifiedFolders[allFolderIndex] = updatedAllFolder;

      saveDataToStorage({ tasks: updatedTasks, folders: state.folders });
      return {
        ...state,
        tasks: updatedTasks,
        folders: modifiedFolders,
      };

    case "EDIT_TASK":
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      saveDataToStorage({ tasks: editedTasks, folders: state.folders });
      return {
        ...state,
        tasks: editedTasks,
      };

    case "DELETE_TASK":
      const taskIdToDelete = action.payload;

      // Знайдемо індекс папки "all"
      const removeAllFolderIndex = state.folders.findIndex(
        (folder) => folder.id === "all"
      );
      const removeAllFolder = state.folders[removeAllFolderIndex];

      // Видалимо ідентифікатор задачі з папки "all"
      const removeUpdatedAllFolder = {
        ...removeAllFolder,
        tasks: removeAllFolder.tasks.filter(
          (taskId) => taskId !== taskIdToDelete
        ),
      };

      // Оновлюємо масив папок
      const removeModifiedFolders = [...state.folders];
      removeModifiedFolders[removeAllFolderIndex] = removeUpdatedAllFolder;

      // Фільтруємо задачі для видалення
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== taskIdToDelete
      );
      saveDataToStorage({
        tasks: filteredTasks,
        folders: removeModifiedFolders,
      });

      return {
        ...state,
        tasks: filteredTasks,
        folders: removeModifiedFolders,
      };

    case "CREATE_FOLDER":
      const newFolder = [...state.folders, action.payload];
      saveDataToStorage({ tasks: state.tasks, folders: newFolder });
      return {
        ...state,
        folders: newFolder,
      };

    case "EDIT_FOLDER":
      const editedFolders = state.folders.map((folder) =>
        folder.id === action.payload.id ? action.payload : folder
      );
      saveDataToStorage({ folders: editedFolders, tasks: state.tasks });
      return {
        ...state,
        folders: editedFolders,
      };

    case "ADD_TASK_TO_FOLDER":
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

      saveDataToStorage({ tasks: updatedTask, folders: updatedFolders });
      return {
        tasks: updatedTask,
        folders: updatedFolders,
      };

    case "DELETE_FOLDER":
      const folderToDelete = action.payload;
      if (folderToDelete !== "all") {
        const filteredFolders = state.folders.filter(
          (folder) => folder.id !== folderToDelete
        );

        saveDataToStorage({ folders: filteredFolders, tasks: state.tasks });
        return {
          ...state,
          folders: filteredFolders,
        };
      }
    default:
      return state;
  }
};

export default todoReducer;
