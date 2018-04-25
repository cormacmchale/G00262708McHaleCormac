import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import { Geolocation } from '@ionic-native/geolocation';
import { ActionSheetController } from 'ionic-angular';


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

  lat:number;
  long:number;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private videoPlayer:YoutubeVideoPlayer, private geolocation: Geolocation) {
  }
  
  playVideo()
  {
    console.log("Hello");
    this.videoPlayer.openVideo('cjIvu7e6Wq8');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Coordinates',
      buttons: [
        {
          text: 'Get Location',
          handler: () => {
            this.geolocation.getCurrentPosition().then((resp) => {
              this.lat = resp.coords.latitude;
              this.long = resp.coords.longitude;
             }).catch((error) => {
               console.log('Error getting location', error);
             });
          }
        },
          {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
