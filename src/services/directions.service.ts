/**
 * Created by rsbrodie on 1/6/17.
 */
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var window;

@Injectable()
export class DirectionsService {

  constructor(public platform: Platform) { }

  getDirections(latitude, longitude, label) {
    if (this.platform.is('ios')) {
      window.location = `http://maps.apple.com/?ll=${latitude},${longitude}&sll=${latitude},${longitude}&q=${label}`;
    } else if (this.platform.is('android')) {
      window.location = `geo:${latitude},${longitude};u=35?q=${latitude},${longitude}(${label})`;
    }
  }
}
