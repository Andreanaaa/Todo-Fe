import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/model/todo';

@Component({
  selector: 'fin-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private todoService: TodoService
  ) { }
    incorrectFormValue: boolean = false
  ngOnInit(): void {
  }

  createHandler(todo: Todo){
    this.todoService.create(todo).subscribe(
      result => {
        console.log(result)
        if (result) this.router.navigateByUrl('create')
        else this.incorrectFormValue = true
      },
      error => {
        console.log(error)
      }
    )
  }

}
