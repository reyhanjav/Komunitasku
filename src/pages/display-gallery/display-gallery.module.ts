import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayGalleryPage } from './display-gallery';

@NgModule({
  declarations: [
    DisplayGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayGalleryPage),
  ],
  exports: [
    DisplayGalleryPage,
  ],
})
export class DisplayGalleryPageModule {}
