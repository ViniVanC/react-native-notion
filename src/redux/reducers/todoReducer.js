import * as taskFunctions from "../../utils/task-functions";
import * as folderFunctions from "../../utils/folder-functions";
import * as nameFunctions from "../../utils/name-functions";

const initialState = {
  tasks: [],
  folders: [],
  userName: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return taskFunctions.addTask(state, action);
    case "EDIT_TASK":
      return taskFunctions.editTask(state, action);
    case "REMINDER_TASK":
      return taskFunctions.reminderTask(state, action);
    case "DELETE_TASK":
      return taskFunctions.deleteTask(state, action);
    case "CREATE_FOLDER":
      return folderFunctions.createFolder(state, action);
    case "EDIT_FOLDER":
      return folderFunctions.editFolder(state, action);
    case "ADD_TASK_TO_FOLDER":
      return folderFunctions.addTaskToFolder(state, action);
    case "DELETE_FOLDER":
      return folderFunctions.deleteFolder(state, action);
    case "ADD_USER_NAME":
      return nameFunctions.addUserName(state, action);
    default:
      return state;
  }
};

export default todoReducer;
