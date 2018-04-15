import { Component } from '@angular/core';
import { AlertController, NavController, NavParams ,ModalController} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  constructor(private navCtrl: NavController,private modal: ModalController,private alertCtrl: AlertController, private auth: AuthService) { }

  openModal(){
    const myModal = this.modal.create('ModalQRcodePage');
    myModal.present();
  }

  logout() {
		this.auth.signOut();
		this.navCtrl.setRoot(WelcomePage);
  }
  
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Once you log out, your data will be erased',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
           this.logout();
          }
        }
      ]
    });
    alert.present();
  }

}