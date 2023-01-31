import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http: HttpClient) {
   }


   getAllItems(): Observable<Item[]> {
   return this.http.get<Item[]>("https://jsonplaceholder.typicode.com/todos");
   }


}
