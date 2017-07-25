// import { Ingredient } from '../shared/ingredient.model';

export class GearCheckModel {
  public dateOfBirth: number;
  public largestGearFront: number;
  public wheelSize: string;

  public ageAtStartYear: number;
  public youthCategory: string;
  public restrictionDistance: number;
  public smallestGearRear: number;
  public rolloutDistance: number;

  constructor(dateOfBirth: number, largestGearFront: number, wheelSize: string) {
    this.dateOfBirth = dateOfBirth;
    this.largestGearFront = largestGearFront;
    this.wheelSize = wheelSize;
  }
}
