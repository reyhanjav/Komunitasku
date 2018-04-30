import { Component } from '@angular/core';
import { App,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../services/auth.service';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { ImageLoaderConfig } from 'ionic-image-loader';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  private app;
	private platform;

  constructor(app: App, platform: Platform,
		private statusBar: StatusBar,
		private auth: AuthService,private imageLoaderConfig: ImageLoaderConfig) {
      
      this.app = app;
      this.platform = platform;
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
      this.imageLoaderConfig.setFallbackUrl('assets/imgs/placeholder.png');
      this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
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
