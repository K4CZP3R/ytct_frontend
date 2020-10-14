import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(): boolean {
    console.log("Checking!")
    if(!this.auth.isAuthenticated()){
      localStorage.setItem('redirect_to', window.location.href);
      window.location.href = ""
      this.router.navigate([''])
      return false;
    }
    return true;
  }
}
