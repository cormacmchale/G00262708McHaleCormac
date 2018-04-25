import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

  one:number;
  two:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer:YoutubeVideoPlayer, private geolocation: Geolocation) {
  }
  
  playVideo()
  {
    console.log("Hello");
    this.videoPlayer.openVideo('cjIvu7e6Wq8');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.one = resp.coords.latitude;
      this.two = resp.coords.longitude;
      console.log(this.one+" "+this.two);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }


}
