export class GearOptionsModel {
  // base initialisation properties
  public dateOfBirth: number;
  public largestChainRing: number;
  public wheelSize: string;
  public gender: string;
  public country: string;

  constructor(dateOfBirth: number, largestChainRing: number, wheelSize: string, gender: string, country: string) {
    this.dateOfBirth = dateOfBirth;
    this.largestChainRing = largestChainRing;
    this.wheelSize = wheelSize;
    this.gender = gender;
    this.country = country;
  }
}
