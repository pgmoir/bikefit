import { Cyclist } from './../shared/models/cyclist.model';
import { Bike } from './../shared/models/bike.model';

export class GearOptionsModel {
  // base initialisation properties
  public cyclist: Cyclist;
  public bike: Bike;
  public country: string;

  constructor(cyclist: Cyclist, bike: Bike, country: string) {
    this.cyclist = cyclist;
    this.bike = bike;
    this.country = country;
  }
}