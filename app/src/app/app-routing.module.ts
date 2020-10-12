import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelSearchComponent } from './components/channel-search/channel-search.component';
import { GoogleCallbackComponent } from './components/google-callback/google-callback.component';
import { HomeComponent } from './components/home/home.component';
import { SavedChannelsListComponent } from './components/saved-channels-list/saved-channels-list.component';
import { ChannelInfoComponent } from './components/channel-info/channel-info.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "callback", component: GoogleCallbackComponent },
  { path: "search", component: ChannelSearchComponent, canActivate: [AuthGuardService] },
  { path: "saved", component: SavedChannelsListComponent, canActivate: [AuthGuardService] },
  { path: "channel/:cid", component: ChannelInfoComponent, canActivate: [AuthGuardService] },
  { path: "timeline", component: TimelineComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
