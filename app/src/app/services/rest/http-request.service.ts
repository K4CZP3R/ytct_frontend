import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  readonly ROOT_URL: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  get<T>(uri: string) {
    return this.http.get<T>(`${this.ROOT_URL}${uri}`);
  }
  getWithHeaders<T>(uri: string, headers: HttpHeaders) {
    return this.http.get<T>(`${this.ROOT_URL}${uri}`, {
      headers: headers
    })
  }

}
