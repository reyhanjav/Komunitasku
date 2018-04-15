import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ProfilePage';
  tab2Root = 'EventsPage';
  tab3Root = 'DiscussionPage';
  tab4Root = 'GalleryPage';

  constructor() {

  }
}
