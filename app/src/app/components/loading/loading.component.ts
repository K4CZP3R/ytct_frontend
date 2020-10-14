import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  show: boolean = true

  constructor(private loading: LoadingService) { }



  ngOnInit(): void {
    this.loading.loadingState$.subscribe((state: boolean) => {
      this.setVisibility(state);
    })
  }


  setVisibility(show: boolean) {
    this.show = show;
  }

}
