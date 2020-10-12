import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiGenericResponse } from 'src/app/interfaces/api-generic-response';
import { CredentialsDict } from 'src/app/interfaces/credentials-dict';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.scss']
})
export class GoogleCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) { }

  googleCode: string;

  ngOnInit(): void {
    this.googleCode = this.route.snapshot.queryParamMap.get("code")

    this.auth.callback(this.googleCode).then((data: CredentialsDict) => {
      this.auth.setGoogleCredentials(data);
      this.router.navigate(["/"])
    })
      .catch((error: ApiGenericResponse) => {
        console.error(error)
      })


  }

}
