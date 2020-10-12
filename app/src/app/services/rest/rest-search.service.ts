import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RestSearchService {

  constructor(private httpReq: HttpRequestService) { }

  channel(creds: string, query: string) {
    return this.httpReq.getWithHeaders<YtChannel[]>(`/search/channel?query=${query}`,
      new HttpHeaders({
        "creds": creds
      }))
  }
  channel_cid(creds: string, cid: string) {
    return this.httpReq.getWithHeaders<YtChannel>(`/search/channel/${cid}`,
      new HttpHeaders({
        "creds": creds
      }))
  }
}
