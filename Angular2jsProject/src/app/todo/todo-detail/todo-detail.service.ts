import {Injectable} from '@angular/core'
import {TodoDetail} from './todo-detail'

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoDetailService{
    
    // constructor(private http:Http){}

    // todoUrl = "https://jsonplaceholder.typicode.com/todos";

    // getTodos():Observable<TodoDetail[]>{

    //     return this.http.get(this.todoUrl)
    //            .map((response:Response)=><TodoDetail[]>response.json())
    //            .do(data=>console.log("Todos Listed"))
    //            ;
    // }

    // todoDetails: TodoDetail[];
    // todoDetail: TodoDetail;
    // todoUrl = "https://jsonplaceholder.typicode.com/todos";
  
    // constructor(private http: Http) {}
  
    // getTodoDetails(): Observable<TodoDetail[]> {
    //   return this.http.get(this.todoUrl)
    //     .map((res: Response) => res.json()['results']);
    // }
  
    // getTodoDetail(id: number): Observable<TodoDetail> {
    //   return this.getTodoDetails()
    //     .map(todoDetails => todoDetails.find(todoDetail => todoDetail.id == id));
    // }
    
}