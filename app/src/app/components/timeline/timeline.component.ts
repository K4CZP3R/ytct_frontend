import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YtVideo } from 'src/app/interfaces/yt-video';
import { LoadingService } from 'src/app/services/loading.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private video: VideoService,
    private loading: LoadingService,
    private router: Router) { }

  videos: YtVideo[] = [];
  ids_checked: number = 0;
  currentUrl: string;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    let channelIds = this.route.snapshot.queryParamMap.get("ids");
    let channelIdsPath = this.route.snapshot.paramMap.get("ids");

    let ids = channelIds === null ? channelIdsPath.split(',') : channelIds.split(',')
    if (ids.length === 1 && ids[0] === "") {
      this.router.navigate([""])
      return;
    }

    this.loadVideos(ids);
  }

  loadVideos(ids: string[]) {
    this.loading.setVisibility(true);
    ids.forEach((id: string) => {
      this.video.channel(id).then((vids: YtVideo[]) => {

        vids.forEach((v: YtVideo) => {
          this.videos.push(v)
        })
        this.sortVideos();
        this.ids_checked += 1;
        if (this.ids_checked === ids.length)
          this.loading.setVisibility(false);
      })
    })
  }
  sortVideos(): void {
    this.videos.sort((a, b) => (+new Date(a.date) > +new Date(b.date)) ? -1 : 1)
  }

}
