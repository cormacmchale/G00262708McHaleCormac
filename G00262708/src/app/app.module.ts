import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard }  from '@ionic-native/Keyboard';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { NewsApiProvider } from '../providers/news-api/news-api';
import { HttpClientModule } from '@angular/common/http/';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsApiProvider,
    YoutubeVideoPlayer,
    Keyboard,
    Geolocation
  ]
})
export class AppModule {}
