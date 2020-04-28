import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  //add a new property
 @Output() featureSelected = new EventEmitter<string>();
  //make it listenable from outside by using @output


  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
