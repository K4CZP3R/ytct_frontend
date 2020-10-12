import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGenericResponse } from 'src/app/interfaces/api-generic-response';
import { CredentialsDict } from 'src/app/interfaces/credentials-dict';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RestAuthService {

  constructor(private httpReq: HttpRequestService) { }

  login() {
    return this.httpReq.get<ApiGenericResponse>(`/auth/login`)
  }
  callback(code: string) {
    return this.httpReq.get<CredentialsDict>(`/auth/callback?code=${code}`)
  }

}
