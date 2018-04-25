import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { eventList } from '../../model/eventList';
import { eventListService } from '../../services/eventList.service'

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
      this.navCtrl.setRoot('EventsPage');
    })
  }

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
      var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

}
