import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000, 
    });
    loader.present();
  }
  displayNews()
  {
    this.presentLoading(); 
    this.navCtrl.push(NewsPage);
  }
  displayMessages()
  {
    this.navCtrl.push('MessageBoardPage');
  }
  displayVideo()
  {
    this.navCtrl.push('YoutubePage');
  }

}
