export class GearCheckModel {
  // base initialisation properties
  public dateOfBirth: number;
  public largestChainRing: number;
  public wheelSize: string;
  public gender: string;
  // calculated properties
  public birthDate: Date;
  public age: number;
  public youthCategory: string;
  public restrictionDistance: number;
  public smallestGear: number;
  public rolloutDistance: number;
  public tyreCircumference: number;

  constructor(dateOfBirth: number, largestChainRing: number, wheelSize: string, gender: string) {
    this.dateOfBirth = dateOfBirth;
    this.largestChainRing = largestChainRing;
    this.wheelSize = wheelSize;
    this.gender = gender;
  }
}
