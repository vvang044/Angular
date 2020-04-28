import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  //custom event binding to work on directives
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';

  //hostbinding and using hostlistner for the mouseover and mouseleave to work
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elRef:ElementRef, private renderer: Renderer2) { }



  ngOnInit(){
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;

}

//hostlistener decorator with method mouseover
//hostlistener takes argument as input 'mouseenter'
  @HostListener('mouseenter') mouseover(eventData: Event){
    //below code is used for hostlistener to listen to events
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color','lightblue');
  
  //below code is for @HostBinding
  // this.backgroundColor = 'lightblue';

  //below for custom biding
  this.backgroundColor = this.highlightColor;
}

  //hostlistener decorator with method mouseleave
  //hostlistener takes argument as input 'mouseleave'
  
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // below code is used for hostlistener to listen to 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
   
   //below code is for @HostBinding
  // this.backgroundColor = 'transparent';

  // below for custom binding
    this.backgroundColor = this.defaultColor;
  }
}
