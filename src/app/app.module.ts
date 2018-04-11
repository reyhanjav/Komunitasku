import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DiscussionPage } from '../pages/discussion/discussion';
import { GalleryPage } from '../pages/gallery/gallery';
import { CoursePage } from '../pages/course/course';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { IntroducePage } from '../pages/introduce/introduce';

import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DiscussionPage,
    GalleryPage,
    CoursePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    IntroducePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscussionPage,
    GalleryPage,
    CoursePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    IntroducePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
