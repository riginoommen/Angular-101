import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  fetchResponse(): Observable<any>{
    return this.http.get('https://run.mocky.io/v3/3b8432ca-e30b-4271-bf78-3680da7c4eff');
  }
}
