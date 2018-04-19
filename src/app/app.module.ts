
import  {HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


import { AddEventsPage } from '../pages/add-events/add-events';
import { eventListService } from '../services/eventList.service';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { IntroducePage } from '../pages/introduce/introduce';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';



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
    AddEventsPage,

    LoginPage,
    SignupPage,
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
    AddEventsPage,


    LoginPage,
    SignupPage,
    IntroducePage,
    WelcomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    eventListService,
    AngularFireAuth,
    AuthService,
    ImghandlerProvider,
    SplashScreen,
    File,
    FilePath,
    FileChooser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    ImghandlerProvider,
    FileTransfer,
  FileTransferObject,
  ]
})
export class AppModule {}
