import _ from 'lodash';
import { BikeEvent } from './bike-event.model';

/*
The Bike class allows a user to record details of each bike, when it was acquired, significant incidents, changes, upgrades, repairs, etc.
Recording all the details makes it easier to then post the item for sale on the website. All the history or part of the history can be makde available.
*/

export class Bike {

  // core features
  public name: string;
  public description: string;
  public imagePath: string;
  public type: string[]; // array of activity types bike is used for
  public status: string; // active, inactive, forsale, sold, stolen, deleted, demo

  // features for gear check
  public rim: string;
  public tyre: string;
  public chainRings: number[];

  // advanced features
  public frame: string;
  public frameSize: string;
  public fork: string;
  public headset: string;
  public rearMech: string;
  public derailleurHanger: string;
  public frontMech: string;
  public shiftLevers: string;
  public brakes: string;
  public cassette: number[];
  public cassetteSize: number;
  public wheelSet: string;
  public tyres: string;
  public cranks: string;
  public crankSize: number;
  public bottomBracket: string;
  public cockpit: string;
  public handlebarTape: string;
  public saddle: string;
  public pedals: string;
  public minHeight: number; // in mm
  public color: string;
  public weight: number; // in kilograms

  // purchase/sale details
  public purchasePrice: number;
  public purchaseMode: string;
  public salePrice: number;

  public history: BikeEvent[];

  // constructor contains main elements for creating a bike based on gear check requirements
  constructor(name: string, description: string, imagePath: string, type: string[], status: string,
    rim: string, tyre: string, chainRings: number[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.type = type;
    this.status = status;
    this.rim = rim;
    this.tyre = tyre;
    this.chainRings = chainRings;
  }

  setAdvancedProperties(frame: string, frameSize: string, fork: string, headset: string,
    rearMech: string, derailleurHanger: string, frontMech: string, shiftLevers: string,
    brakes: string, cassette: number[], cassetteSize: number, wheelSet: string, tyres: string,
    cranks: string, crankSize: number, bottomBracket: string, cockpit: string, handlebarTape: string,
    saddle: string, pedals: string, minHeight: number, color: string, weight: number) {
    this.frame = frame;
    this.frameSize = frameSize;
    this.fork = fork;
    this.headset = headset;
    this.rearMech = rearMech;
    this.derailleurHanger = derailleurHanger;
    this.frontMech = frontMech;
    this.shiftLevers = shiftLevers;
    this.brakes = brakes;
    this.cassette = cassette;
    this.cassetteSize = cassetteSize;
    this.wheelSet = wheelSet;
    this.tyres = tyres;
    this.cranks = cranks;
    this.crankSize = crankSize;
    this.bottomBracket = bottomBracket;
    this.cockpit = cockpit;
    this.handlebarTape = handlebarTape;
    this.saddle = saddle;
    this.pedals = pedals;
    this.minHeight = minHeight;
    this.color = color;
    this.weight = weight;
  }

  setPurchaseSaleProperties(purchasePrice: number, purchaseMode: string, salePrice: number) {
    this.purchasePrice = purchasePrice;
    this.purchaseMode = purchaseMode;
    this.salePrice = salePrice;
  }

  getLargestChainRing() {
    return _.max(this.chainRings);
  }
}
