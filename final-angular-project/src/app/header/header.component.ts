import { Component, EventEmitter, Output } from '@angular/core';


//js object to configure this component
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

//create a class where Angular instantiates 
// this will be used from outside so we use export
export class HeaderComponent {
   @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
        this.featureSelected.emit(feature);
  }

}