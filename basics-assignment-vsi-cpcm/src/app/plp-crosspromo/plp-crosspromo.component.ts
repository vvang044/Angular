import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plp-crosspromo',
  templateUrl: './plp-crosspromo.component.html',
  styleUrls: ['./plp-crosspromo.component.css']
})
export class PlpCrosspromoComponent implements OnInit {
  cpcmName = 'crosspromoHeader';
  cpcmPara = 'crosspromodesc';
  cpcmBtn = 'SHOP NOW';

  constructor() { }

  ngOnInit() {
  }

}
