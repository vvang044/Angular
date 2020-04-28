import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  //add a new property
 @Output() featureSelected = new EventEmitter<string>();
//make it listenable from outside by using @output
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
