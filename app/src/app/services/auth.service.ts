import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiGenericResponse } from '../interfaces/api-generic-response';
import { CredentialsDict } from '../interfaces/credentials-dict';
import { RestAuthService } from './rest/rest-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restAuth: RestAuthService) { 
    this.isAuthenticatedBs.next(this.isAuthenticated());
  }

  private isAuthenticatedBs = new BehaviorSubject<boolean>(false);
  readonly isAuthenticatedBs$ = this.isAuthenticatedBs.asObservable();

  callback(code: string) {
    return new Promise((resolve, reject) => {
      this.restAuth.callback(code)
        .subscribe(
          (data: CredentialsDict) => {
            resolve(data);
          },
          (error: HttpErrorResponse) => {
            let apiResp: ApiGenericResponse = {
              success: false,
              message: error.status !== 0 ? error.error.message : error.message,
              status: error.status !== 0 ? error.error.status : error.statusText
            }
            reject(apiResp)
          }
        )
    })
  }
  login() {
    return new Promise((resolve, reject) => {
      this.restAuth.login()
        .subscribe(
          (data: ApiGenericResponse) => {
            if (data.success)
              resolve(data.message)
            else {
              let apiResp: ApiGenericResponse = {
                message: data.message,
                status: data.status,
                success: data.success
              };
              reject(apiResp);
            }
          },
          (error: HttpErrorResponse) => {
            let apiResp: ApiGenericResponse = {
              success: false,
              message: error.status !== 0 ? error.error.message : error.message,
              status: error.status !== 0 ? error.error.status : error.statusText
            }
            reject(apiResp)

          }
        )
    })
  }

  setGoogleCredentials(googleCreds: CredentialsDict) {
    this.isAuthenticatedBs.next(true);
    localStorage.setItem("creds", JSON.stringify(googleCreds));
  }

  getGoogleCredentials(): string {
    return localStorage.getItem("creds")
  }

  isAuthenticated(): boolean {
    let creds = this.getGoogleCredentials();
    console.log("creds", creds)
    if (creds === undefined || creds === null) {
      return false;
    }

    return true;
  }
}
