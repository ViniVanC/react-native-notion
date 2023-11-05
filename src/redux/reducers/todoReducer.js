import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  tasks: [],
};

const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem("todoData", JSON.stringify(tasks));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedTasks = [action.payload, ...state.tasks];
      saveTasksToStorage(updatedTasks); // Збереження даних в AsyncStorage
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "EDIT_TASK":
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      saveTasksToStorage(editedTasks); // Збереження даних в AsyncStorage
      return {
        ...state,
        tasks: editedTasks,
      };
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      saveTasksToStorage(filteredTasks); // Збереження даних в AsyncStorage
      return {
        ...state,
        tasks: filteredTasks,
      };
    default:
      return state;
  }
};

export default todoReducer;
