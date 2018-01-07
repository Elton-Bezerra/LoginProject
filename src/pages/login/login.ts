
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = { "username": "", "password": "", "email": "", "name": ""};

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.authService.postData(this.userData, "login")
    .then( (result) => {
        //Api connection
        console.log(result)
        this.responseData = result;
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.presentToast('User logged successfuly');
        this.navCtrl.push(TabsPage);
      }, (error) => {
        //Connection failed message

      }
    );
  }



  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: 'bottom'
    });
    toast.present();

  }
}
