import { Component } from '@angular/core';
import { NavController, NavParams ,ModalController} from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  constructor(private modal: ModalController) { }

  openModal(){
    const myModal = this.modal.create('ModalQRcodePage');
    myModal.present();
  }

}
