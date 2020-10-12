import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { YtVideo } from 'src/app/interfaces/yt-video';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RestVideoService {

  constructor(private httpReq: HttpRequestService) { }

  channel(channel_id: string, creds: string) {
    return this.httpReq.getWithHeaders<YtVideo[]>(`/videos/channel/${channel_id}`,
      new HttpHeaders({
        "creds": creds
      }))
  }
}
