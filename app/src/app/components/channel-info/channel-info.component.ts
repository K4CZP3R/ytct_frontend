import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { YtVideo } from 'src/app/interfaces/yt-video';
import { SearchService } from 'src/app/services/search.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-channel-info',
  templateUrl: './channel-info.component.html',
  styleUrls: ['./channel-info.component.scss']
})
export class ChannelInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private search: SearchService,
    private video: VideoService) { }

  channel: YtChannel;
  videos: YtVideo[];

  ngOnInit(): void {
    let cid = this.route.snapshot.paramMap.get("cid");
    this.search.search_cid(cid).then((channel: YtChannel) => {
      console.log(channel)
      this.channel = channel;

      this.video.channel(channel.cid).then((videos: YtVideo[]) =>{
        this.videos = videos;
      })
    })
  }

}
