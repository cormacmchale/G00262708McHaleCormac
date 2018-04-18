import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the NewsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsApiProvider Provider');
  }

  GetNewsData():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=1466f77e4dac4f16a92ce1f88602db01");
    }
      
}
