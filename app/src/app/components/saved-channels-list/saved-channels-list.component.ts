import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { ChannelSelectorService } from 'src/app/services/channel-selector.service';

@Component({
  selector: 'app-saved-channels-list',
  templateUrl: './saved-channels-list.component.html',
  styleUrls: ['./saved-channels-list.component.scss']
})
export class SavedChannelsListComponent implements OnInit {

  constructor(private channelSelector: ChannelSelectorService,
    private router: Router) { }

  savedChannels: YtChannel[] = [];
  ngOnInit(): void {
    this.channelSelector.savedChannels$.subscribe((newList) => {
      this.savedChannels = newList;
    })
  }

  clearList(): void {
    this.channelSelector.removeAll();

  }
  generateTimeline(): void {
    let timelineUrl = "/timeline?ids=";
    this.savedChannels.forEach((c) => {
      timelineUrl += c.cid + ","
    })
    timelineUrl = timelineUrl.slice(0, timelineUrl.length - 1);
    this.router.navigateByUrl(timelineUrl)
  }

}
