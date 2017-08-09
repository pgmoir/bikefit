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
  public validResult: boolean;

  constructor(options: GearOptionsModel) {
    this.options = options;
  }
}
