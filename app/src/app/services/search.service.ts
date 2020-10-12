import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGenericResponse } from '../interfaces/api-generic-response';
import { YtChannel } from '../interfaces/yt-channel';
import { AuthService } from './auth.service';
import { RestSearchService } from './rest/rest-search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private auth: AuthService,
    private restSearch: RestSearchService) { }


  search_cid(cid: string) {
    return new Promise((resolve, reject) => {
      this.restSearch.channel_cid(this.auth.getGoogleCredentials(), cid)
        .subscribe(
          (data: YtChannel) => {
            resolve(data)
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
  search(query: string) {
    return new Promise((resolve, reject) => {
      this.restSearch.channel(this.auth.getGoogleCredentials(), query)
        .subscribe(
          (data: YtChannel[]) => {
            resolve(data)
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
}
