import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  todos: Todo[] = [];
  todoValue?: Todo;

  //Two way, kita bisa memanfaatkan getter and setter
  get todo(): Todo {
    return this.todoValue as Todo;
  }

  set todo(todo: Todo) {
    this.onSaveTodo(todo);
  }

  ngOnInit(): void {
    this.loadTodos();
  }

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
    if (todo.id) {
      this.todos = this.todos.map((item) => {
        if (item.id === todo.id) {
          item = todo;
        }
        return item;
      });
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    }
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onEditTodo(todo: Todo): void {
    this.todoValue = todo;
  }

  onToggleTodo(): void {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onDeletedTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (!todo.isDone) {
      Swal.fire({
        title: `Beneran ${todo.name} mau dihapus?`,
        text: 'Kamu ngga bisa membatalkan ini!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus aja!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.todos.splice(index, 1);
          Swal.fire('Dihapus!', `${todo.name} sudah dihapus`, 'success');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Eh...',
        text: 'Udah selesai, jangan dihapus!',
        footer: '<a href="">Kenapa ini?</a>',
      });
    }
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
