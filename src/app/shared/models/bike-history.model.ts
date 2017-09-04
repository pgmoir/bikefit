import { BikeEvent } from './bike-event.model';

/*
The Bike class allows a user to record details of each bike, when it was acquired, significant incidents, changes, upgrades, repairs, etc.
Recording all the details makes it easier to then post the item for sale on the website. All the history or part of the history can be makde available.
*/

export class BikeHistory {

  public history: BikeEvent[];

  // constructor contains main elements for creating a bike based on gear check requirements
  constructor(history: BikeEvent[]) {
    this.history = history;
  }
}
