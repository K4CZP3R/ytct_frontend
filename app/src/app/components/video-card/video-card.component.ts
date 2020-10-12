import { Component, Input, OnInit } from '@angular/core';
import { YtVideo } from 'src/app/interfaces/yt-video';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() videoObj: YtVideo
  constructor() { }

  ngOnInit(): void {
  }

}
