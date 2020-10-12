import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private auth: AuthService) { }

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticatedBs$.subscribe((state) =>{
      this.isAuthenticated = state
    })

  }
  ngAfterViewInit(): void {
    M.AutoInit();
    let elems = document.querySelectorAll('.sidenav')
    let options = {};
    M.Sidenav.init(elems, options);
  }

}
