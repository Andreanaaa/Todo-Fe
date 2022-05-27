import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Todo } from 'src/app/shared/model/todo';
import { environment } from "src/environments/environment";
@Injectable(
)
export class TodoService{

    constructor(
        private http: HttpClient
    ) {}

        public getAll(): Observable<Todo[]>{
           const url = environment.baseUrl + '/list'
           return this.http.get<Todo[]>(url);
        }

        public create(todo: Todo): Observable<number>{
            const url = environment.baseUrl + '/create'
            return this.http.post<number>(url,todo);           
        }

        public update (todo: Todo): Observable<number>{
            const url = environment.baseUrl + '/{id}' +todo.id
            return this.http.put<number>(url,todo);
        }
        public delete(id:number): Observable<any>{
          const url = environment.baseUrl + '/{id}'+ id; 
            return this.http.delete<any>(url);
        }
}

