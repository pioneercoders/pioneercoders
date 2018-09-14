import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgStreamingModule } from 'videogular2/streaming';
import { VgImaAdsModule } from 'videogular2/ima-ads';

import { AppComponent } from "./app.component";
import { MediaPlayerComponent } from './player/mediaplayer.component';
import { AppHeader } from './header/header.component';
import { Topics } from './topics/topics.component';
import { ContentAreaComponent } from './contentarea/contentarea.component';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubePlayerComponent } from '../app/youtubeplayer/youtube-player.component';

import { TutorilaService } from './service/tutorialservice';

const appRoutesConfig: Routes = [
    { path: ':courseId', component: ContentAreaComponent,
    children: [
        {path: ':topicId', component: YoutubePlayerComponent},
      ] },
    { path: '', component: ContentAreaComponent },
  ];

@NgModule({
    declarations: [
        AppComponent, AppHeader, Topics, MediaPlayerComponent, ContentAreaComponent, YoutubePlayerComponent
    ],
    imports: [
        BrowserModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        VgOverlayPlayModule,
        VgStreamingModule,
        VgImaAdsModule,
        HttpClientModule,
        YoutubePlayerModule,
        RouterModule.forRoot(appRoutesConfig)
    ],
    providers: [TutorilaService, {provide: APP_BASE_HREF, useValue : '/' }],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
