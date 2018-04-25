import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDiscussionPage } from './add-discussion';

@NgModule({
  declarations: [
    AddDiscussionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDiscussionPage),
  ],
})
export class AddDiscussionPageModule {}
