import { Component, Input, OnInit } from '@angular/core';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { ChannelSelectorService } from 'src/app/services/channel-selector.service';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})
export class ChannelCardComponent implements OnInit {
  @Input() channelObj: YtChannel
  constructor(private channelSelector: ChannelSelectorService) { }

  isOnTheList: boolean = false;

  ngOnInit(): void {
    this.channelSelector.savedChannels$.subscribe((newList) => {

      let found: boolean = false;
      newList.forEach((c) => {
        if (c.cid === this.channelObj.cid)
          found = true;
      })

      this.isOnTheList = found;



    })
  }

  addToTheList() {
    this.channelSelector.addToList(this.channelObj)
  }
  removeFromTheList() {
    this.channelSelector.removeFromList(this.channelObj)
  }

}
