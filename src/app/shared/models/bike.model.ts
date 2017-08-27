import { HistoryEvent } from './history-event.model';
import { Cyclist } from './cyclist.model';

/*
The Bike class allows a user to record details of each bike, when it was acquired, significant incidents, changes, upgrades, repairs, etc.
Recording all the details makes it easier to then post the item for sale on the website. All the history or part of the history can be makde available.
*/

export class Bike {
  public name: string;
  public description: string;
  public status: string;
  public imagePath: string;
  public rim: string;
  public tyre: string;
  public largestChainRing: number;
  public chainRingTeeth: number[];
  public crankSize: number;
  public cassetteTeeth: number[];
  public cassetteSize: number;
  public history: HistoryEvent[];

  public users: Cyclist[];

  constructor(name: string, description: string, imagePath: string, rim: string, tyre: string, largestChainRing: number, users: Cyclist[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.rim = rim;
    this.tyre = tyre;
    this.largestChainRing = largestChainRing;
    this.users = users;
    this.status = 'active';
  }
}
