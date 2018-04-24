import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
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
