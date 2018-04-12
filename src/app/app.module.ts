
import  {HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { DiscussionPage } from '../pages/discussion/discussion';
import { GalleryPage } from '../pages/gallery/gallery';
import { CoursePage } from '../pages/course/course';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { IntroducePage } from '../pages/introduce/introduce';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


export const firebaseConfig = {
  apiKey: "AIzaSyD1VS3xLMSqaqn4Wgeqh2CSqyAq2xRBWQA",
  authDomain: "komunitasku-af3ca.firebaseapp.com",
  databaseURL: "https://komunitasku-af3ca.firebaseio.com",
  projectId: "komunitasku-af3ca",
  storageBucket: "komunitasku-af3ca.appspot.com",
  messagingSenderId: "1016567746072"
};




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
    WelcomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxErrorsModule,
    SuperTabsModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule

    
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
    WelcomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
