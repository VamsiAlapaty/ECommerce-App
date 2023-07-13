import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getList$ = new Observable;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos?limit=10');
  }
}
