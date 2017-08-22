import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css']
})
export class KitComponent implements OnInit {

  pants: string[] = ['rapha black pants', 'blyth white pants', 'movistar blue pants'];
  shirts: string[] = ['orica blue shirt', 'sky white shirt', 'yellow jersey shirt'];
  value = 10;

  constructor() { }

  ngOnInit() {
  }

}
