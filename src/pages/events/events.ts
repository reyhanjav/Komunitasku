import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { eventList } from '../../model/eventList';
import { eventListService } from '../../services/eventList.service';
import { IntroducePage } from '../introduce/introduce';
import { AddEventsPage } from '../add-events/add-events';
import { EditEventsPage } from '../edit-events/edit-events';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  eventlist: Observable<eventList[]>

  constructor(public navCtrl: NavController, private elService: eventListService) {
    this.eventlist = this.elService.geteventList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  goToIntroduce(introduce: any) {
    this.navCtrl.push(IntroducePage);
  }

  addEvent(event: any) {
    this.navCtrl.push(AddEventsPage);
  }

  editEvent(event: any) {
    this.navCtrl.push(EditEventsPage);
  }

}
