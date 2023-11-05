import shortid from "shortid";

const initialState = {
  tasks: [
    {
      id: shortid.generate(),
      subject: "Buy movie tickets for Friday",
      done: false,
    },
    {
      id: shortid.generate(),
      subject: "Make a React Native tutorial",
      done: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
