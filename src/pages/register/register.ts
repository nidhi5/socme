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
        .icon-margin-left{
          margin-left: 10px !important;
        }
        .form-item {
          border-radius: 30px;
        }
        .btn-insta {
          background-color : #f46f30;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          color: #fff;
          position: relative;
          margin: 0px 10px;
        }

        .btn-twitter {
          background-color : #00b6f1;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          color: #fff;
          position: relative;
          margin: 0px 10px;
        }

        .btn-fb {
          background-color : #3b5998;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          color: #fff;
          position: relative;
          margin: 0px 10px;
        }

        .btn-linkedin {
          background-color : #007bb6;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          margin: 0 auto;
          color: #fff;
          position: relative;
          margin: 0px 10px;
        }

        .btn-insta ion-icon, .btn-twitter ion-icon, .btn-fb ion-icon, .btn-linkedin ion-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .div-social-icon {
          text-align: center;
        }
        .div-social-icon h5 {
          font-size: 18px;
          color: #fff;
          padding-top: 15px;
        }

        .register_heading div {
          display: inline-block;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #f08f3a;
          position: relative;
        }

        .register_heading div ion-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
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
  .div-head {
    font-size: 20px;
    color: #474747;
    font-weight: bolder;
    padding-top: 7px;
  }

  span.div-reg {
    max-width: 180px;
    height:50px;
    border-radius:25px;
    color: #fff;
    text-align: center !important;
    background-color: #a82400;
    margin: 30px auto;
    justify-content: center !important;
    display: list-item;
    font-size: 16px;
    padding-top: 15px !important;
  }

  .login-form button {
    width: 100%;
    border-radius: 25px;
    text-align: left;
    margin: 15px auto;
    color: #474747;
    border: 2px solid #111;
}

.login-form ion-item {
    width: 98%;
    border-radius: 40px;
    text-align: left;
    margin: 15px auto;
    color: #474747;
    border:2px solid black;
    
}

.login-form button ion-icon {
    padding-right: 10px;
}

.button-inner {
    justify-content: left;
}

.drop-arrw {
  padding-left: 135px;
}

.trans_item{
    border: 2px solid black;
    border-radius: 25px;
    background:transparent;
    color:#474747;
}
  input::-webkit-input-placeholder {
color: #888888 !important;
}
input{
  margin-top:0px !important;
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