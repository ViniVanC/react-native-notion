import AsyncStorage from "@react-native-async-storage/async-storage";
import shortid from "shortid";

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const updateExpense = (state, action) => {
  const { value, status } = action.payload;

  const newHistoryEntry = {
    id: shortid.generate(),
    date: new Date(),
    value: parseFloat(value),
    status,
  };

  const updatedMoney = {
    value:
      status === "+"
        ? parseFloat(state.money.value) + parseFloat(value)
        : parseFloat(state.money.value) - parseFloat(value),
    history: [...state.money.history, newHistoryEntry],
  };

  saveDataToStorage({
    money: value > 0 ? updatedMoney : state.money,
    tasks: state.tasks,
    folders: state.folders,
    userName: state.userName,
  });

  return {
    ...state,
    money: value > 0 ? updatedMoney : state.money,
  };
};
