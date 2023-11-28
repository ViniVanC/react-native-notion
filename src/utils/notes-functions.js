import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataToStorage = async (data) => {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
  } catch (error) {
    console.error("Помилка збереження даних:", error);
  }
};

export const addNote = (state, action) => {
  const newNote = {
    id: state.notes.length + 1,
    title: "",
    content: "",
    folders: ["all"],
  };

  const updatedNotes = [...state.notes, newNote];

  saveDataToStorage({
    notes: updatedNotes,
    money: state.money,
    userName: state.userName,
    tasks: state.tasks,
    folders: state.folders,
  });

  return {
    ...state,
    notes: updatedNotes,
  };
};

export const editNote = (state, action) => {
  const editedNotes = state.notes.map((note) =>
    note.id === action.payload.id ? action.payload : note
  );

  saveDataToStorage({
    notes: editedNotes,
    money: state.money,
    userName: state.userName,
    tasks: state.tasks,
    folders: state.folders,
  });

  return {
    ...state,
    notes: editedNotes,
  };
};

export const deleteNote = (state, action) => {
  const noteIdToDelete = action.payload;

  const filteredNotes = state.notes.filter(
    (note) => note.id !== noteIdToDelete
  );

  saveDataToStorage({
    notes: filteredNotes,
    money: state.money,
    userName: state.userName,
    tasks: state.tasks,
    folders: state.folders,
  });

  return {
    ...state,
    notes: filteredNotes,
  };
};
