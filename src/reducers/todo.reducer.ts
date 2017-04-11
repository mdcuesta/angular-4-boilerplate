import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilter } from '../actions/todo.action';
import Todo from '../models/todo.model';

const { SHOW_ALL } = VisibilityFilter;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        new Todo(action.todo)
      ];
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
