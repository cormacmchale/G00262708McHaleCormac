import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsApiProvider } from '../../providers/news-api/news-api';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private news: NewsApiProvider) {
  }

  newsStories:any = [];

  ionViewDidLoad()
  {
   this.news.GetNewsData().subscribe(data =>
     {
     this.newsStories = data.articles;
     });
  }

}
