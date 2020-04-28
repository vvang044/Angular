import { Directive, HostListener, HostBinding } from '@angular/core';

//add decorator to turn this into directive
@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective{
    //what should directive do, add css styles
   
    //to bind properties to that element, here its the class open
   @HostBinding('class.open') isOpen = false;

    //to listen to a click add hostlistener
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;

    }

}