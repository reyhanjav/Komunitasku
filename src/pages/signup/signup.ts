import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { IntroducePage } from '../introduce/introduce';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    //Api connections
    this.navCtrl.push(IntroducePage);
  }

}
