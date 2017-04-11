import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import todoApp from '../reducers/todo.reducer';
import BaseStore from './base.store';

@Injectable()
export default class TodoStore extends BaseStore {
  constructor() {
    super(todoApp);
  }
}
