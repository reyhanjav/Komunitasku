import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { eventList } from '../../model/eventList';
import { eventListService } from '../../services/eventList.service';
import { EventsPage } from '../events/events'; 

@IonicPage()
@Component({
  selector: 'page-edit-events',
  templateUrl: 'edit-events.html',
})
export class EditEventsPage {
  event: eventList = {
    title: '',
    content: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private elService: eventListService) {
      this.event = this.navParams.get('event');
  }



  updateEvent(event: eventList) {
    this.elService.updateEvent(event).then(() => {
      this.navCtrl.setRoot(EventsPage);
    })
  }
 
  removeEvent(event: eventList) {
    this.elService.removeEvent(event).then(() => {
      this.navCtrl.setRoot(EventsPage);
    })
  }

}
