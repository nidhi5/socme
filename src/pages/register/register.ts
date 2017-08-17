import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'register',
  templateUrl: 'register.html',
  styles:[
    `input::-webkit-input-placeholder {
        color: white !important;
      }
    .register_heading{
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }
    .form-list{
      margin-top:50px;
    }
    .form-item{
      padding-left:0px;
    }
    .form-icon{
      background: rgba(64, 64, 64, 0.51);
      padding: 10px;
      margin: 0px !important;
      width: 45px;
      color:white;

    }
    .form-input{
      margin-left: 10px !important;
            font-weight: bold;
                background: none;
    border: none;
    }
    ion-item{
          background-color: rgba(0, 0, 0, 0.20) !important;
          color:white;
          margin-top:10px;
    }
        .icon-margin-left{
          margin-left: 10px !important;
        }
    `
  ]
})
export class RegisterPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor() {
    }
  }