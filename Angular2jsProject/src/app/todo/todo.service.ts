import {Injectable} from '@angular/core'
import {Todo} from './todo'

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService{
    
    constructor(private http:Http){}

    todoUrl = "https://jsonplaceholder.typicode.com/todos";

    private createAuthorizationHeader(headers:Headers){
        headers.append("Authorization",btoa('fatih : 12345'))
    }

    getTodos():Observable<Todo[]>{
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        var requestOption = new RequestOptions({headers:headers});

        return this.http.get(this.todoUrl, requestOption)
               .map((response:Response)=><Todo[]>response.json())
               .do(data=>console.log("Todos Listed"))
               .catch(this.handleError);
    }

    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}