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

  pages: Array<{}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage , icon: 'home' },
      // { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage , icon: 'key' },
      { title: 'Register', component: RegisterPage , icon:'barcode' },
      // { title: 'About us', component: AboutUsPage },
      { title: 'Backgrounds', component: BackgroundPage , icon:'camera' },
      
      { title: 'Trending Businesses', component: AboutUsPage , icon: 'clock'},
      { title: 'Dynamic Count', component: AboutUsPage , icon: 'clock' },
      { title: 'Testimonials', component: AboutUsPage , icon: 'clock' },
      { title: 'Cancellations', component: AboutUsPage , icon: 'clock' },
      { title: 'How we are different', component: AboutUsPage , icon: 'clock' },
      { title: 'Contact us', component: AboutUsPage , icon: 'clock' },
      { title: 'What we do', component: AboutUsPage , icon: 'clock' },
      { title: 'How it works', component: AboutUsPage , icon: 'clock' },
      { title: 'Terms and Conditions', component: AboutUsPage , icon: 'clock' },

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
