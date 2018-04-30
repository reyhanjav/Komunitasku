import { Component,NgZone  } from '@angular/core';
import { IonicPage, NavController,LoadingController, Loading } from 'ionic-angular';
import { GalleryPostProvider, Post } from '../../providers/gallery-post/gallery-post';
import { Observable } from 'rxjs/Observable';
import { ImageLoader } from 'ionic-image-loader';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  loader: Loading;
  posts: Observable<Post[]>;

  constructor(private imageLoader: ImageLoader,public navCtrl: NavController, public gallery: GalleryPostProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.gallery.getPosts();
    this.posts.subscribe(data => {
        this.loader.dismiss();
    });
  }

  getUserImage(id: number) {
    return this.gallery.getUserImage(id);
  }
 
  getUserName(id: number) {
    return this.gallery.getUserName(id);
  }

  clearCache(refresher) {
    this.imageLoader.clearCache();
    refresher.complete();
  }
 
  onImageLoad(event) {
    console.log('image ready: ', event);
  }
 
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

  displayGallery(post: Post) {
    this.navCtrl.push('DisplayGalleryPage',{post: post});
  }

}
