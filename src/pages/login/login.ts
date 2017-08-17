import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styles:[`
.content-ios {
    background-color: #12A5F4;
}

.animated { 
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both; 
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
}

 

@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes bounceInDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -moz-transform: translateY(30px);
  }

  80% {
    -moz-transform: translateY(-10px);
  }

  100% {
    -moz-transform: translateY(0);
  }
}
@-o-keyframes bounceInDown {
  0% {
    opacity: 0;
    -o-transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -o-transform: translateY(30px);
  }

  80% {
    -o-transform: translateY(-10px);
  }

  100% {
    -o-transform: translateY(0);
  }
}
@keyframes bounceInDown {
  0% {
    opacity: 0;
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    transform: translateY(30px);
  }

  80% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
.bounceInDown {
  -webkit-animation-name: bounceInDown;
  -moz-animation-name: bounceInDown;
  -o-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

.login-form button {
    width: 80%;
    border-radius: 25px;
    text-align: left;
    margin: 15px auto;
    color: #fff;
    border: 1px solid #fff;
}

.login-form button ion-icon {
    padding-right: 10px;
}

.button-inner {
    justify-content: left;
}

.login-main-container div {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("/assets/icon/logoa.jpg");
    background-size: contain;
    background-color: #b2dff4;
    margin: 30px auto 0px;
    background-repeat: no-repeat;
}

.div-login_btn {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
    background-color: #b2dff4;
    margin: 50px auto;
}

.div-login_btn div {
    position: relative;
}

.div-login_btn div ion-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #fff;
    font-size: 50px;
    font-weight: bolder;
}

.login-form {
    margin: 85px 0px 30px 0px;
}

.div-create h6 {
    text-align: center;
    font-size: 12px;
    color: #fff;
}`]
})
export class LoginPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor() {
    }
  }