import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/model/todo';

@Component({
  selector: 'fin-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  insertedDescrizione: string =""
  insertedStatus: string =""
  insertedDataCreazione:string=""
  insertedDataScadenza: string=""

    @Input()
    incorrectForm: boolean = false

    @Output()
    createEvent: EventEmitter<Todo> = new EventEmitter<Todo>()
  
    constructor() { }

  ngOnInit(): void {
  }
  completeTodoForm(todoForm: NgForm){
    const todo: Todo = {
      descrizione: todoForm.value.descrizione,
      status: todoForm.value.status,
      data_creazione: todoForm.value.DataCreazione,
      data_scadenza: todoForm.value.DataScadenza,
      id: 0
    }
    console.log(todo)

    this.createEvent.emit(todo)
  }
}
