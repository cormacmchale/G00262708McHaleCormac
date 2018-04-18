import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private storage:Storage) {
  }
  displayNews()
  {
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
