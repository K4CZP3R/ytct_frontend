import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtVideo } from 'src/app/interfaces/yt-video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private video: VideoService) { }

  videos: YtVideo[] = [];
  idsToQuery: string[] = [];
  currentUrl: string;
  ngOnInit(): void {
    let channelIds = this.route.snapshot.queryParamMap.get("ids");
    this.currentUrl = window.location.href;
    this.idsToQuery = channelIds.split(',')

    this.idsToQuery.forEach((id: string) => {
      this.video.channel(id).then((vids: YtVideo[]) => {
        vids.forEach((v: YtVideo) => {
          this.videos.push(v)
        })
        this.sortVideos();
      })
    })

  }

  sortVideos(): void {
    this.videos.sort((a, b) => (+new Date(a.date) > +new Date(b.date)) ? -1 : 1)
  }

}
