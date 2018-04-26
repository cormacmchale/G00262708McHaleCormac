import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Keyboard }  from '@ionic-native/Keyboard';
/**
 * Generated class for the MessageBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-board',
  templateUrl: 'message-board.html',
})
export class MessageBoardPage {
   rootPage:String = "messageBoard";
   MyStatus:String;
   savedStatus:String;
   addStatus:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private keyboard: Keyboard) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageBoardPage');
    this.storage.get("Status").then
    ((data) =>{this.savedStatus = data;})
    .catch((err) => 
    {alert("Error accesssing Storage")})
  }
  showStatus()
  {
    if(this.savedStatus == null)
    {
      this.savedStatus ="";
    }    
    this.addStatus = this.savedStatus+"--"+this.MyStatus+"--"+"\n";
    this.storage.set("Status", this.addStatus);
    this.storage.get("Status").then
      ((data) =>{this.savedStatus = data;
                  console.log(data)})
      .catch((err) => 
      {alert("Error accesssing Storage")})
      console.log("debug");
      this.keyboard.close();
  }
  clearBoard()
  {
    this.storage.clear();
    this.storage.get("Status").then
    ((data) =>{this.savedStatus = data;})
    .catch((err) => 
    {alert("Error accesssing Storage")})
    console.log("debug");
    this.keyboard.close();
  }
  showKeyboard()
  {
     this.keyboard.show();
  }
}
