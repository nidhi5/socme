import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutUsPage } from '../pages/aboutus/aboutus';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BackgroundPage } from '../pages/background/background';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'About us', component: AboutUsPage },

      { title: 'Backgrounds', component: BackgroundPage },
      { title: 'Trending Businesses', component: AboutUsPage },
      { title: 'Dynamic Count', component: AboutUsPage },
      { title: 'Testimonials', component: AboutUsPage },
      { title: 'Cancellations', component: AboutUsPage },
      { title: 'How we are different', component: AboutUsPage },
      { title: 'Contact us', component: AboutUsPage },
      { title: 'What we do', component: AboutUsPage },
      { title: 'How it works', component: AboutUsPage },
      { title: 'Terms and Conditions', component: AboutUsPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
