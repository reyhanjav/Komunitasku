import { Component } from '@angular/core';
import { NavController, NavParams ,ModalController} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  constructor(private navCtrl: NavController,private modal: ModalController, private auth: AuthService) { }

  openModal(){
    const myModal = this.modal.create('ModalQRcodePage');
    myModal.present();
  }

  logout() {
		this.auth.signOut();
		this.navCtrl.setRoot(WelcomePage);
	}

}