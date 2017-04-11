import { Component, OnInit, OnDestroy } from '@angular/core';
import TodoStore from '../../stores/todo.store';
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter, VisibilityFilter } from '../../actions/todo.action';
import Todo from '../../models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  todos: Array<Todo>;
  todoStoreUnSubscribe: any;
  todoStore: TodoStore;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
    this.todoStoreUnSubscribe = this.todoStore.subscribe(() => {
      const todoState = this.todoStore.getState();
      this.todos = todoState['todos'];
    });
  }

  delete(index) {
    this.todoStore.dispatch(deleteTodo(index));
  }

  add(task) {
    this.todoStore.dispatch(addTodo(task));
  }

  ngOnInit() {
    const todoState = this.todoStore.getState();
    this.todos = todoState['todos'];
  }

  ngOnDestroy() {
    this.todoStoreUnSubscribe();
  }
}
