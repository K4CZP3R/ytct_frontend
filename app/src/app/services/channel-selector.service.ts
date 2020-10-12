import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { YtChannel } from '../interfaces/yt-channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelSelectorService {

  selectedChannels: YtChannel[];
  constructor() {
    this.savedChannels.next(this.getCurrentStorageContent());
  }

  private savedChannels = new BehaviorSubject<YtChannel[]>([]);
  readonly savedChannels$ = this.savedChannels.asObservable();


  private getCurrentStorageContent(): YtChannel[] {
    let savedChannels = localStorage.getItem('saved_channels')
    if (savedChannels == null) {
      return [];
    }

    let savedChannelsObj: YtChannel[] = JSON.parse(savedChannels);
    return savedChannelsObj;
  }
  private saveToStorage(channels: YtChannel[]) {
    this.savedChannels.next(channels);
    localStorage.setItem('saved_channels', JSON.stringify(channels));
  }

  isInTheList(channel: YtChannel): boolean {
    let found: boolean = false;
    this.getCurrentStorageContent().forEach((c) => {
      if (c.cid === channel.cid) {
        found = true;
      }
    })
    return found;
  }

  addToList(channel: YtChannel): boolean {
    let currentChannels = this.getCurrentStorageContent();

    let duplicate: boolean = false;
    currentChannels.forEach((c) => {
      if (c.cid === channel.cid) {
        duplicate = true;
      }
    });

    if (duplicate) {
      return false;
    }

    currentChannels.push(channel);

    this.saveToStorage(currentChannels);

    return true;

  }
  removeAll(): void {
    this.saveToStorage([]);
  }
  removeFromList(channel: YtChannel): boolean {
    let currentChannels = this.getCurrentStorageContent();

    let index = -1;
    for (let i = 0; i < currentChannels.length; i++) {
      if (currentChannels[i].cid === channel.cid) {
        index = i;
      }
    }

    if (index != -1) {
      currentChannels.splice(index, 1);

      this.saveToStorage(currentChannels)
      return true;
    }
    return false;
  }

  getList(): YtChannel[] {
    return JSON.parse(localStorage.getItem('saved_channels'))
  }
}
