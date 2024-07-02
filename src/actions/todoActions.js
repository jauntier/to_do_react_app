import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actionTypes';


export const addTask = (id, text) => ({
  type: ADD_TASK,
  payload: { id, text }
});


export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});


export const editTask = (id, text) => ({
  type: EDIT_TASK,
  payload: { id, text }
});


export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});