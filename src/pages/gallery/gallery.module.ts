import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicImageLoader,
    IonicPageModule.forChild(GalleryPage),
  ],
})
export class GalleryPageModule {}
