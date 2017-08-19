export class Bike {
  public name: string;
  public description: string;
  public imagePath: string;
  public rim: string;
  public tyre: string;
  public largestChainRing: number;

  constructor(name: string, description: string, imagePath: string, rim: string, tyre: string, largestChainRing: number) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.rim = rim;
    this.tyre = tyre;
    this.largestChainRing = largestChainRing;
  }
}
