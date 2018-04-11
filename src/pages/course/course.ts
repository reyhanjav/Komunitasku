import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroducePage } from '../introduce/introduce';
@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  constructor(public navCtrl: NavController) {

  }

  goToIntroduce(introduce: any) {
    this.navCtrl.push(IntroducePage);
  }

}
