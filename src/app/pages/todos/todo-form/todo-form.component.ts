import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoField } from '../model/todo-field.model';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo?: Todo;
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  field: typeof TodoField = TodoField;

  todoForm: FormGroup = new FormGroup({
    [TodoField.ID]: new FormControl(null),
    [TodoField.NAME]: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    [TodoField.IS_DONE]: new FormControl(false),
  })
  constructor() { }

  ngOnChanges(): void {
    if(this.todo){
      this.todoForm.setValue(this.todo);
    }
  }

  ngOnInit(): void {

  }

  onSubmitTodo(): void {
    this.todoChange.emit(this.todoForm.value);
    this.todoForm.reset();
  }

  setFormValue(): void {
    if(this.todo){
      // Cara 1
      this.todoForm.get(TodoField.ID)?.setValue(this.todo.id);
      this.todoForm.get(TodoField.NAME)?.setValue(this.todo.name);
      this.todoForm.get(TodoField.IS_DONE)?.setValue(this.todo.isDone);

      // Cara 2
      // this.todoForm.setValue(this.todo);
    } else if(this.todoForm){
      this.todoForm.reset();
    }
  }

  // Validation Field
  isValid(controlName: TodoField){
    const control: AbstractControl | null = this.todoForm.get(controlName);
    let classCss: string = '';
    // touched -> sudah di klik
    // dirty -> sudah pernah terisi
    // invalid -> status input invalid atau tidak
    // valid -> status input valid atau tidak
    if(control && control.touched && control.invalid){
      classCss = 'is-invalid';
    } else if(control && control.valid){
      classCss = 'is-valid';
    } else {
      classCss = '';
    }
    return classCss;
  }
}
