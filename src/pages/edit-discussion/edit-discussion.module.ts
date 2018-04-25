import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDiscussionPage } from './edit-discussion';

@NgModule({
  declarations: [
    EditDiscussionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDiscussionPage),
  ],
})
export class EditDiscussionPageModule {}
