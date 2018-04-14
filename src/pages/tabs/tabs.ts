import { Component } from '@angular/core';

import { DiscussionPage } from '../discussion/discussion';
import { GalleryPage } from '../gallery/gallery';
import { EventsPage } from '../events/events';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = EventsPage;
  tab3Root = DiscussionPage;
  tab4Root = GalleryPage;

  constructor() {

  }
}
