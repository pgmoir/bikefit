// import { Ingredient } from '../shared/ingredient.model';

export class GearCheckModel {
  public dateOfBirth: number;
  public largestGearFront: number;
  public wheelSize: string;

  public birthDate: Date;
  public ageAtStart: number;
  public youthCategory: string;
  public restrictionDistance: number;
  public smallestGearRear: number;
  public rolloutDistance: number;
  public tyreCircumference: number;

  constructor(dateOfBirth: number, largestGearFront: number, wheelSize: string) {
    this.dateOfBirth = dateOfBirth;
    this.largestGearFront = largestGearFront;
    this.wheelSize = wheelSize;
  }
}
