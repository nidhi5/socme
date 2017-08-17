import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutUsPage{
selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor() {
  }
}