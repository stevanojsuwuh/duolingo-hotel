import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  
  ngOnInit(): void {
    this.loadTodos();
  }
  todos: Todo[] = [];
  loadTodos(): void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string;
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isDone: true,
        },
        {
          id: 2,
          name: 'Minum',
          isDone: false,
        },
      ];
      sessionStorage.setItem('todos', JSON.stringify(todos));
      this.todos = todos;
    } else {
      this.todos = JSON.parse(sessionTodos);
    }
  }

  onSaveTodo(todo: Todo): void {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onEditTodo(todo: Todo): void {}

  onToggleTodo(todo: Todo): void {}
}
