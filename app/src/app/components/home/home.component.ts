import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGenericResponse } from 'src/app/interfaces/api-generic-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean = false;
  constructor(private auth: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  googleLogin() {
    this.auth.login().then((url: string) => {
      console.log("Will redirect user to: ", url)
      window.location.href = url;
    })
      .catch((error: ApiGenericResponse) => {
        console.error(error);
      })

  }

}
