import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../providers/gallery-post/gallery-post';


@IonicPage()
@Component({
  selector: 'page-display-gallery',
  templateUrl: 'display-gallery.html',
})
export class DisplayGalleryPage {
  post: Post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

}
