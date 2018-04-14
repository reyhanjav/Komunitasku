import { Component } from '@angular/core';
import { App,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  private app;
	private platform;

  constructor(app: App, platform: Platform,
		private statusBar: StatusBar,
		private auth: AuthService) {
      
      this.app = app;
      this.platform = platform;
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = WelcomePage;
          }
        },
        () => {
          this.rootPage = WelcomePage;
        }
      );
}
}
