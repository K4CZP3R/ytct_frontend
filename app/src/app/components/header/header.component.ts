import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    M.AutoInit();
    let elems = document.querySelectorAll('.sidenav')
    let options = {};
    let instances = M.Sidenav.init(elems, options);
  }

}
