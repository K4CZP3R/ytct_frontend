import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiGenericResponse } from 'src/app/interfaces/api-generic-response';
import { YtChannel } from 'src/app/interfaces/yt-channel';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-channel-search',
  templateUrl: './channel-search.component.html',
  styleUrls: ['./channel-search.component.scss']
})
export class ChannelSearchComponent implements OnInit {

  model: string;
  modelChanged: Subject<string> = new Subject<string>();

  foundChannels: YtChannel[];

  constructor(private search: SearchService) {
    this.modelChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((model) => {
      if (model.length >= 3) {
        this.searchFor(model)
      }
    })
  }

  ngOnInit(): void {
    this.foundChannels = [];
  }

  changed(text: string) {
    console.log("Changed!")
    this.modelChanged.next(text);
  }
  searchFor(query: string) {
    console.log("Will search for", query)
    this.search.search(query).then(
      (data: YtChannel[]) => {
        this.foundChannels = data;
      }
    )
      .catch((error: ApiGenericResponse) => {
        console.error(error)
      })
  }

}
