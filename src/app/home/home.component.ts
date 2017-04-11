import { Component, OnInit, OnDestroy } from '@angular/core';
import todoStore from '../../stores/todo.store';
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

  constructor() {
    this.todoStoreUnSubscribe = todoStore.subscribe(() => {
      const todoState = todoStore.getState();
      this.todos = todoState['todos'];
    });
  }

  delete(index) {
    todoStore.dispatch(deleteTodo(index));
  }

  add(task) {
    todoStore.dispatch(addTodo(task));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.todoStoreUnSubscribe();
  }
}
