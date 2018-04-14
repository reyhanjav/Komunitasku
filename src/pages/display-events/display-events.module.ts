import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayEventsPage } from './display-events';

@NgModule({
  declarations: [
    DisplayEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayEventsPage),
  ],
})
export class DisplayEventsPageModule {}
