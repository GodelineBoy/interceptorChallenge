import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos/1'
   }

   public getApi(): Observable<{id: number}> {
     return this.http.get<{id: number}>(this.url);
   }

}
