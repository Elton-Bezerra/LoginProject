
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { LoginPage } from './../login/login';

import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData: any;
  userData = { "username": "", "password": "", "email": "", "name": ""};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.authService.postData(this.userData, "signup")
    .then( (result) => {
        //Api connection
        console.log(result)
        this.responseData = result;
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.presentToast('User added successfuly');
        this.navCtrl.push(TabsPage);
      }, (error) => {
        //Connection failed message

      }
    );
  }

  login(){
    this.navCtrl.push(LoginPage);
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
