import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DirectionsService } from '../../services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitude: string = "";
  longitude: string = "";
  locationLabel: string = "";

  constructor(public navCtrl: NavController, public directionsService: DirectionsService) {

  }

  loadExampleCoordinates() {
    this.latitude = "38.576870";
    this.longitude = "-121.4932450";
    this.locationLabel = "California State Capital";
  }

  getDirections() {
    this.directionsService.getDirections(this.latitude, this.longitude, this.locationLabel);
  }
}
