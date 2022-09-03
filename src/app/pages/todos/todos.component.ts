import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos: Todo[] = [];
  loadTodos(): void {
    this.todos =[
      {
      id: 1,
      name: 'Makan',
      isDone: true
    },
    {
      id: 2,
      name: 'Minum',
      isDone: false
    },
  ]
  sessionStorage.setItem('todos', JSON.stringify(this.todos));
}

  onSaveTodo(todo:Todo): void {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    this.loadTodos();
  }

}
