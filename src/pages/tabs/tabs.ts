import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ProfilePage';
  tab2Root = 'EventsPage';
  tab3Root = 'DiscussionPage';
  tab4Root = 'GalleryPage';

  constructor( public navCtrl: NavController) {

  }

  chat() {
    this.navCtrl.push('ProfilePage');
  }
}
