import { Cyclist } from './../shared/models/cyclist.model';
import { Bike } from './../shared/models/bike.model';

export class GearOptionsModel {
  // base initialisation properties
  public gender: string;
  public dateOfBirth: number;
  public rim: string;
  public tyre: string;
  public largestChainRing: number;
  public country: string;

  constructor(cyclist: Cyclist, bike: Bike, country: string) {
    this.gender = cyclist.gender;
    this.dateOfBirth = cyclist.dateOfBirth;

    this.rim = bike.rim;
    this.tyre = bike.tyre;
    this.largestChainRing = bike.largestChainRing;

    this.country = country;
  }
}
