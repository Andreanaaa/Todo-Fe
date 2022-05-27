import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/model/todo';

@Component({
  selector: 'fin-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
 
  @Input()
  option: string = ""

  @Input()
  title: string = ""

  @Output()
  selectEvent: EventEmitter<number> = new EventEmitter()

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter()

  @Input()
  allTodo: Todo[] = []

  constructor() { }

  optionHandler(id: number) {
    if (this.option === "Aggiorna") this.selectEvent.emit(id)
    if (this.option === "Elimina") this.deleteEvent.emit(id)
  }
  
  ngOnInit(): void {
  }

}


