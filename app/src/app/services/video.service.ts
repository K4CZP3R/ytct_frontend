import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGenericResponse } from '../interfaces/api-generic-response';
import { YtChannel } from '../interfaces/yt-channel';
import { YtVideo } from '../interfaces/yt-video';
import { AuthService } from './auth.service';
import { RestVideoService } from './rest/rest-video.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private restVideo: RestVideoService,
    private auth: AuthService) { }


  channel(channel_id: string) {
    return new Promise((resolve, reject) => {
      this.restVideo.channel(channel_id, this.auth.getGoogleCredentials())
        .subscribe(
          (data: YtVideo[]) => {
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
}
