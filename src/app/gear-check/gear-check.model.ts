import { GearOptionsModel } from './gear-options.model';

export class GearCheckModel {
  // base initialisation properties
  public options: GearOptionsModel;

  // calculated properties
  public birthDate: Date;
  public ageAtStart: number;
  public youthCategory: string;
  public restrictionDistance: number;
  public smallestGear: number;
  public rolloutDistance: number;
  public tyreCircumference: number;
  public resultStatus: string;
  public recommendation: string;

  constructor(options: GearOptionsModel) {
    this.resultStatus = 'pending';
    this.options = options;
  }
}
