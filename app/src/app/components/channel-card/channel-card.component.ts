import { Component, Input, OnInit } from '@angular/core';
import { YtChannel } from 'src/app/interfaces/yt-channel';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})
export class ChannelCardComponent implements OnInit {
  @Input() channelObj: YtChannel
  constructor() { }

  ngOnInit(): void {
    console.log(this.channelObj)
  }

}
