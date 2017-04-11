export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export enum VisibilityFilter {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
};

export function addTodo(todo: string) {
  return { type: ADD_TODO, todo };
}

export function deleteTodo(index: number) {
  return { type: DELETE_TODO, index };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: VisibilityFilter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
