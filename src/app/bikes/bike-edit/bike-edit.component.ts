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
    return(<FormArray>this.bikeForm.get('users')).controls;
  }

  private initForm() {
    let bikeName = '';
    let bikeImagePath = '';
    let bikeDescription = '';
    const bikeUsers = new FormArray([]);

    if (this.editMode) {
      const bike = this.bikeService.getBike(this.id);
      bikeName = bike.name;
      bikeImagePath = bike.imagePath;
      bikeDescription = bike.description;
      if (bike['users']) {
        for (const user of bike.users) {
          bikeUsers.push(
            new FormGroup({
              'firstname': new FormControl(user.firstname, Validators.required),
              'lastname': new FormControl(user.lastname)
            })
          );
        }
      }
    }

    this.bikeForm = new FormGroup({
      'name': new FormControl(bikeName, Validators.required),
      'imagePath': new FormControl(bikeImagePath),
      'description': new FormControl(bikeDescription, Validators.required),
      'users': bikeUsers
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

  onAddUser() {
    (<FormArray>this.bikeForm.get('users')).push(
      new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null)
      })
    );
  }

  onDeleteUser(index: number) {
    (<FormArray>this.bikeForm.get('users')).removeAt(index);
  }
}
