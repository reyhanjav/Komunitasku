import { Component, NgZone } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams ,ModalController} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { WelcomePage } from '../welcome/welcome';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  avatar: string;
  displayName: string;

  constructor(private navCtrl: NavController,public zone: NgZone,private modal: ModalController,private alertCtrl: AlertController,public imghandler: ImghandlerProvider, private profile: AuthService) { }

  openModal(){
    const myModal = this.modal.create('ModalQRcodePage');
    myModal.present();
  }

  openReward() {
    this.navCtrl.push('RewardPage');
  }

  logout() {
		this.profile.signOut();
		this.navCtrl.setRoot(WelcomePage);
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

  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.profile.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed');
          statusalert.present();
      })
      })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit name',
      inputs: [{
        name: 'name',
        placeholder: 'name'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.name) {
            this.profile.updatedisplayname(data.name).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your name has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.name;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your name was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
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