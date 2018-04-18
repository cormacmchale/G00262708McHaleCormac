import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { NewsApiProvider } from '../../providers/news-api/news-api';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    NewsApiProvider
  ],
})
export class NewsPageModule {}
