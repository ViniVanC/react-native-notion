import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  tasks: [],
  folders: [],
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
      if (allFolderIndex === -1) {
        const newAllFolder = {
          id: "all",
          name: "All",
          tasks: [action.payload.id],
        };
        const modifiedFoldersWithAll = [newAllFolder, ...state.folders];

        saveDataToStorage({
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

      saveDataToStorage({ tasks: updatedTasks, folders: modifiedFolders });

      return { ...state, tasks: updatedTasks, folders: modifiedFolders };

    case "EDIT_TASK":
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      saveDataToStorage({ tasks: editedTasks, folders: state.folders });
      return {
        ...state,
        tasks: editedTasks,
      };

    case "REMINDER_TASK":
      // Створюємо новий масив завдань, змінюючи reminder конкретного завдання за його id.
      const reminderTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, reminder: action.payload.reminder }
          : task
      );

      // Зберігаємо оновлений стан у локальне сховище або в інше місце, яке ви використовуєте для зберігання стану.
      saveDataToStorage({ tasks: reminderTasks, folders: state.folders });

      // Повертаємо новий стан Redux, оновивши поле tasks.
      return {
        ...state,
        tasks: reminderTasks,
      };

    case "DELETE_TASK":
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
      saveDataToStorage({ tasks: state.tasks, folders: editedFolders });
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
