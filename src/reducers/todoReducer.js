// // todoReducer.js
// import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from '../actions/actionTypes';

// // Define initial state
// const initialState = {
//   tasks: []
// };

// // Define the reducer function
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         tasks: [...state.tasks, { id: action.payload.id, text: action.payload.text, completed: false }]
//       };
//     case DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload)
//       };
//     case EDIT_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map(task =>
//           task.id === action.payload.id ? { ...task, text: action.payload.text } : task
//         )
//       };
//     case TOGGLE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map(task =>
//           task.id === action.payload ? { ...task, completed: !task.completed } : task
//         )
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;



import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from '../actions/actionTypes';


const initialState = {
  tasks: []
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: action.payload.id, text: action.payload.text, completed: false }]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        )
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
