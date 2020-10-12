import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleCallbackComponent } from './components/google-callback/google-callback.component';
import { ChannelSearchComponent } from './components/channel-search/channel-search.component';
import { FormsModule } from '@angular/forms';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';
import { SavedChannelsListComponent } from './components/saved-channels-list/saved-channels-list.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ChannelInfoComponent } from './components/channel-info/channel-info.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GoogleCallbackComponent,
    ChannelSearchComponent,
    ChannelCardComponent,
    SavedChannelsListComponent,
    VideoCardComponent,
    ChannelInfoComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
