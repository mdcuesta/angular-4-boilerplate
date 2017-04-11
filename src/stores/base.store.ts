import { createStore } from 'redux';

export interface IStore {
  subscribe(callback);

  dispatch(action);

  getState();
}

export default class BaseStore implements IStore {
  private store;

  constructor(reducer) {
    this.store = createStore(reducer);
  }

  subscribe(callback) {
    return this.store.subscribe(callback);
  }

  dispatch(action) {
    return this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }
}
