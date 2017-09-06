import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})
export class BikeEditComponent implements OnInit {
  id: string;
  editMode = false;
  bikeForm: FormGroup;

  statuses: string[] = [ 'active', 'inactive', 'forsale', 'sold', 'stolen', 'deleted', 'demo' ];
  rims: string[] = [
    '28inch', '27inch', '700c/29er', '650b/27.5', '650c', '26inch mtb', '24inch S5', '24inch E6',
    '24inch Terry', '24inch MTB/BMX', '20inch Recumbent', '20inch Schwinn', '20inch BMX/Recumb', '16inch Brompton'
  ];
  tyres: string[] = [
    '20mm', '23mm', '25mm', '28mm', '32mm', '35mm', '37mm', '38mm', '44mm', '45mm', '50mm', '56mm',
    '1.00"', '1.25"', '1.5"', '1.75"', '1.90"', '1.95"', '2.00"', '2.10"', '2.125"', '2.20"', '2.25"', '2.30"', '2.35"',
    '2.40"', '2.50"', '2.75"', '3.00"', '3.80"', '4.00"', '4.60"', '4.70"', '4.80"', '4.90"'
  ];

  get formData() { return <FormArray>this.bikeForm.get('history'); }

  constructor(private route: ActivatedRoute, private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'] ? params['id'] : UUID.UUID();
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  // getControls() {
  //   return(<FormArray>this.bikeForm.get('history')).controls;
  // }

  private initForm() {
    let bikeName = '';
    let bikeDescription = '';
    let bikeImagePath = '';
    let bikeType = [];
    let bikeStatus = 'active';
    let bikeRim = '';
    let bikeTyre = '';
    let bikeChainRings = [];

    // this.name = name;
    // this.description = description;
    // this.type = type;
    // this.status = status;
    // this.imagePath = imagePath;
    // this.rim = rim;
    // this.tyre = tyre;
    // this.chainRings = chainRings;

    const bikeHistory = new FormArray([]);

    if (this.editMode) {
      const bike = this.bikeService.getBike(this.id);
      bikeName = bike.name;
      bikeImagePath = bike.imagePath;
      bikeDescription = bike.description;
      bikeType = bike.type;
      bikeStatus = bike.status;
      bikeRim = bike.rim;
      bikeTyre = bike.tyre;
      bikeChainRings = bike.chainRings;
    }

    this.bikeForm = new FormGroup({
      'name': new FormControl(bikeName, Validators.required),
      'imagePath': new FormControl(bikeImagePath),
      'description': new FormControl(bikeDescription, Validators.required),
      'status': new FormControl(bikeStatus, Validators.required),
      'rim': new FormControl(bikeRim, Validators.required),
      'tyre': new FormControl(bikeTyre, Validators.required)
    });
  }

  onSubmit() {
    console.log('onsubmit');
    if (this.editMode) {
      this.bikeService.updateBike(this.id, this.bikeForm.value);
    } else {
      this.bikeService.addBike(this.id, this.bikeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // onAddEvent() {
  //   (<FormArray>this.bikeForm.get('history')).push(
  //     new FormGroup({
  //       'eventDate': new FormControl(null, Validators.required),
  //       'eventDetail': new FormControl(null)
  //     })
  //   );
  // }

  // onDeleteEvent(index: number) {
  //   (<FormArray>this.bikeForm.get('history')).removeAt(index);
  // }
}
