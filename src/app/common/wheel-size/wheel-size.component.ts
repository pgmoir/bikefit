import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-size',
  templateUrl: './wheel-size.component.html',
  styleUrls: ['./wheel-size.component.css']
})
export class WheelSizeComponent implements OnInit {

  @Input() rimSize: string;
  @Input() tyreSize: string;
  valid = false;

  rimSizes: string[] = ['28inch', '27inch', '700c/29er', '650b/27.5', '650c', '26inch mtb', '24inch S5', '24inch E6',
    '24inch Terry', '24inch MTB/BMX', '20inch Recumbent', '20inch Schwinn', '20inch BMX/Recumb', '16inch Brompton'];

  tyreSizes: string[] = ['20mm', '23mm', '25mm', '28mm', '32mm', '35mm', '37mm', '38mm', '44mm', '45mm', '50mm', '56mm',
    '1.00"', '1.25"', '1.5"', '1.75"', '1.90"', '1.95"', '2.00"', '2.10"', '2.125"', '2.20"', '2.25"', '2.30"', '2.35"',
    '2.40"', '2.50"', '2.75"', '3.00"', '3.80"', '4.00"', '4.60"', '4.70"', '4.80"', '4.90"'];

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.setWheelSizeIsValid();
  }

  private setWheelSizeIsValid() {
    this.valid = !(!this.rimSize || !this.tyreSize);
    console.log('wheel = ' + this.valid);
  }
}
