export class Bike {
  public name: string;
  public description: string;
  public imagePath: string;
  public rimSize: string;
  public tyreSize: string;
  public largestChainRing: number;

  constructor(name: string, description: string, imagePath: string, rimSize: string, tyreSize: string, largestChainRing: number) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.rimSize = rimSize;
    this.tyreSize = tyreSize;
    this.largestChainRing = largestChainRing;
  }
}
