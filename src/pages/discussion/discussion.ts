import { Component,NgZone  } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html'
})
export class DiscussionPage {

  avatar: string;
  displayName: string;

  constructor(public navCtrl: NavController,public zone: NgZone, private profile: AuthService) {

  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.profile.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  addGallery(gallery: any) {
    this.navCtrl.push('AddDiscussionPage');
  }

  editGallery(gallery: any) {
    this.navCtrl.push('EditDiscussionPage');
  }

  displayGallery(gallery: any) {
    this.navCtrl.push('DisplayDiscussionPage');
  }

}
