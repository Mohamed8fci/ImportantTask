import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  get(path: string) {
    return this.http.get(this.apiUrl + path);
  }

  post(path: string, body: any) {
    return this.http.post(this.apiUrl + path, body);
  }

  put(path: string, body: any) {
    return this.http.put(this.apiUrl + path, body);
  }

  delete(path: string) {
    return this.http.delete(this.apiUrl + path);
  }
}