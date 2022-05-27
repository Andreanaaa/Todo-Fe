import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/model/todo';

@Component({
  selector: 'fin-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  

  @Input()
  todo!: Todo;

  @Output() getEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private todoService: TodoService,
    
    private router: Router
  ) {
  
  



   
  }
}
