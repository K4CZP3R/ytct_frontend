import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleCallbackComponent } from './components/google-callback/google-callback.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"callback", component: GoogleCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
