import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'background',
  templateUrl: 'background.html'
})
export class BackgroundPage{
selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor() {
  }
}