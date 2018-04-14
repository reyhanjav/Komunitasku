import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { eventList } from '../../model/eventList';
import { eventListService } from '../../services/eventList.service'
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-add-events',
  templateUrl: 'add-events.html',
})
export class AddEventsPage {

  event: eventList = {
    title: '',
    content: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private elService: eventListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventsPage');
  }

  addEvent(event: eventList){
    this.elService.addEvent(event).then(ref => {
      this.navCtrl.setRoot(EventsPage);
    })
  }

}
