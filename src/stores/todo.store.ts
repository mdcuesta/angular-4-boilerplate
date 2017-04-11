import { createStore } from 'redux';
import todoApp from '../reducers/todo.reducer';

const store = createStore(todoApp);

export default store;
