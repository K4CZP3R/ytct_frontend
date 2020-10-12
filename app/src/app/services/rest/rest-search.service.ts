import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RestSearchService {

  constructor(private httpReq: HttpRequestService) { }

  channel(creds: string, query: string) {
    return this.httpReq.getWithHeaders(`/search/channel?query=${query}`,
      new HttpHeaders({
        "creds": creds
      }))
  }
}
