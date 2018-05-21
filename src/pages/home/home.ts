import { Geolocation } from 'ionic-plugins';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coords: any;
  accuracy: any;
  error: any;
  constructor(public navCtrl: NavController) {

  }

  watch() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords.latitude + ' ' + resp.coords.longitude;
      this.accuracy = resp.coords.accuracy + ' meters';
    }).catch((error) => {
      this.error = 'Error getting location: ' + error;
    });
  }


}
