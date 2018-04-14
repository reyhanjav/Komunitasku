import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEventsPage } from './edit-events';

@NgModule({
  declarations: [
    EditEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditEventsPage),
  ],
})
export class EditEventsPageModule {}
