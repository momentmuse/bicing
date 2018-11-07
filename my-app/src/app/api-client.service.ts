import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })
export class ApiClientService {
  baseUrl: string = 'http://localhost:3000/stations';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor (private http: HttpClient) {}

  getStations (): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
