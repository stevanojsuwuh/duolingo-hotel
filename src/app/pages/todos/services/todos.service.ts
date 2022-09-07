import { Injectable } from '@angular/core';
import { isThursday } from 'date-fns';
import { SessionService } from 'src/app/shared/services/session.service';
import { Todo } from '../model/todo.model';

const TODO_KEY = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = []

  constructor(
    private readonly sessionService: SessionService
  ) { }

  list(): Todo[] {
    const todoValue: string = this.sessionService.get(TODO_KEY);
    try {
      const todos: Todo[] = todoValue? JSON.parse(todoValue): [{
        id: 1,
        name: 'Makan',
        isDone: false
      }];
      // this.updateSessionStorage(); -> KURANG TEPAT
      this.todos = todos;
      this.updateSessionStorage();
      return todos;
      // this.updateSessionStorage(); -> SANGAT SALAH
    } catch (error: any) {
      return error.message;
    }
  }

  checkedTodo(todo: Todo): void {
    try {
      this.todos.forEach((item) => {
        if(item.id === todo.id) item.isDone = !item.isDone;
        this.updateSessionStorage();
      })
    } catch (error) {
      console.error(error);
       
    }
  }

  remove(id: number): void {
    try {
      const todoId: number = this.todos.findIndex(item => item.id == id);
      this.todos.splice(todoId, 1);
      this.updateSessionStorage();
    } catch (error) {
      console.error(error);
    }
  }

  save(todo: Todo): void {
    try {
      if(!todo.id){
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
      } else {
        // Update
        this.todos = this.todos.map((item) => {
          if(item.id === todo.id){
            item = todo;
            // item = (...item, ...todo) 
          }
          return item;
        })
      }
      this.updateSessionStorage();
    } catch (error) {
      console.error(error);
    }
  }

  get(id: number): Todo {
    try {
      return this.todos.find((todo) => todo.id === id) as Todo;
    } catch (error: any) {
      console.error(error);
      return error.message;
    }
  }

  private updateSessionStorage(): void {
    this.sessionService.set(TODO_KEY, JSON.stringify(this.todos));
  }
}
