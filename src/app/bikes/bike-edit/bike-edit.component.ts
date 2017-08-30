import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})
export class BikeEditComponent implements OnInit {
  id: number;
  editMode = false;
  bikeForm: FormGroup;

  statuses: string[] = [ 'active', 'inactive', 'forsale', 'sold', 'stolen', 'deleted', 'demo' ];

  constructor(private route: ActivatedRoute, private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  getControls() {
    return(<FormArray>this.bikeForm.get('history')).controls;
  }

  private initForm() {



    // this.frame = frame;
    // this.frameSize = frameSize;
    // this.fork = fork;
    // this.headset = headset;
    // this.rearMech = rearMech;
    // this.derailleurHanger = derailleurHanger;
    // this.frontMech = frontMech;
    // this.shiftLevers = shiftLevers;
    // this.brakes = brakes;
    // this.cassette = cassette;
    // this.cassetteSize = cassetteSize;
    // this.wheelSet = wheelSet;
    // this.tyres = tyres;
    // this.cranks = cranks;
    // this.crankSize = crankSize;
    // this.bottomBracket = bottomBracket;
    // this.cockpit = cockpit;
    // this.handlebarTape = handlebarTape;
    // this.saddle = saddle;
    // this.pedals = pedals;
    // this.minHeight = minHeight;
    // this.color = color;
    // this.weight = weight;

    // this.purchasePrice = purchasePrice;
    // this.purchaseMode = purchaseMode;
    // this.salePrice = salePrice;


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
      if (bike['history']) {
        for (const event of bike.history) {
          bikeHistory.push(
            new FormGroup({
              'eventDate': new FormControl(event.eventDate, Validators.required),
              'eventDetail': new FormControl(event.detail)
            })
          );
        }
      }
    }

    console.log('Status ' + bikeStatus);

    this.bikeForm = new FormGroup({
      'name': new FormControl(bikeName, Validators.required),
      'imagePath': new FormControl(bikeImagePath),
      'description': new FormControl(bikeDescription, Validators.required),
      'status': new FormControl(bikeStatus, Validators.required),
      'history': bikeHistory
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.bikeService.updateBike(this.id, this.bikeForm.value);
    } else {
      this.bikeService.addBike(this.bikeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddEvent() {
    (<FormArray>this.bikeForm.get('history')).push(
      new FormGroup({
        'eventDate': new FormControl(null, Validators.required),
        'eventDetail': new FormControl(null)
      })
    );
  }

  onDeleteEvent(index: number) {
    (<FormArray>this.bikeForm.get('history')).removeAt(index);
  }
}
