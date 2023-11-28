export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

export const addNote = () => ({
  type: "ADD_NOTE",
});

export const editNote = (note) => ({
  type: "EDIT_NOTE",
  payload: note,
});

export const deleteNote = (noteId) => ({
  type: "DELETE_NOTE",
  payload: noteId,
});

export const createFolder = (folderName) => ({
  type: "CREATE_FOLDER",
  payload: folderName,
});

export const editFolder = (folderName) => ({
  type: "EDIT_FOLDER",
  payload: folderName,
});

export const addTaskToFolder = (taskId, folderId) => ({
  type: "ADD_TASK_TO_FOLDER",
  payload: { taskId, folderId },
});

export const deleteFolder = (folderId) => ({
  type: "DELETE_FOLDER",
  payload: folderId,
});

export const reminderTask = (taskId, reminderData) => ({
  type: "REMINDER_TASK",
  payload: {
    id: taskId,
    reminder: reminderData,
  },
});

export const addUserName = (name) => ({
  type: "ADD_USER_NAME",
  payload: name,
});

export const updateExpense = (value, status) => ({
  type: "UPDATE_EXPENSE",
  payload: { value, status },
});

export const updatePurse = (value) => ({
  type: "UPDATE_PURSE",
  payload: value,
});
