import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from '../model/todo.model';
import { TodosService } from '../services/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private readonly todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.loadTodo();
  }

  loadTodo(): void {
    this.todos = this.todoService.list()
  }

  onCheckTodo(todo: Todo): void {    
    this.todoService.checkedTodo(todo);
    // this.toggleTodo.emit(); // Kalo ngga ada parameternya, bisa langsung emit aja
  }

  onSelectTodo(todo: Todo): void {
    // this.editTodo.emit(todo);
  }

  onDeleteTodo(todo: Todo): void {
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
          this.todoService.remove(todo.id);
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
  }
}
