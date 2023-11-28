import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const addUserName = (state, action) => {
  const newUserName = action.payload;
  saveDataToStorage({
    notes: state.notes,
    money: state.money,
    tasks: state.tasks,
    folders: state.folders,
    userName: newUserName,
  });
  return {
    ...state,
    userName: newUserName,
  };
};
