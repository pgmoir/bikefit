import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Cyclist } from '../../../shared/models/cyclist.model';
import { CyclistService } from '../../cyclist.service';

@Component({
  selector: 'app-cyclist-edit',
  templateUrl: './cyclist-edit.component.html',
  styleUrls: ['./cyclist-edit.component.css']
})
export class CyclistEditComponent implements OnInit {

  @ViewChild('firstnameInput') firstnameInputRef: ElementRef;
  @ViewChild('lastnameInput') lastnameInputRef: ElementRef;
  @ViewChild('genderInput') genderInputRef: ElementRef;

  genders: string[] = ['male', 'female'];

  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {
  }

  onAddItem() {
    const firstname = this.firstnameInputRef.nativeElement.value;
    const lastname = this.lastnameInputRef.nativeElement.value;
    const gender = this.genderInputRef.nativeElement.value;
    const newCyclist = new Cyclist(firstname, lastname, gender, 0, '', 0);
    this.cyclistService.addCyclist(newCyclist);
  }

}
