import _ from 'lodash';

/*
The Bike class allows a user to record details of each bike, when it was acquired, significant incidents, changes, upgrades, repairs, etc.
Recording all the details makes it easier to then post the item for sale on the website. All the history or part of the history can be makde available.
*/

export class Bike {

  // core features
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public type: string[]; // array of activity types bike is used for
  public status: string; // active, inactive, forsale, sold, stolen, deleted, demo

  // features for gear check
  public rim: string;
  public tyre: string;
  public chainRings: number[];

  // constructor contains main elements for creating a bike based on gear check requirements
  constructor(id: string, name: string, description: string, imagePath: string, type: string[], status: string, rim: string, tyre: string, chainRings: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.type = type;
    this.status = status;
    this.rim = rim;
    this.tyre = tyre;
    this.chainRings = chainRings;
  }

  getLargestChainRing() {
    return _.max(this.chainRings);
  }
}
