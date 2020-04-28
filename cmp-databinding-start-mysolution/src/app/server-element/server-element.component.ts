import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

 @Input('srvElement') element:{type:string, name: string, content: string};
 @Input() name: string;
 @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
  }

 ngOnChanges(changes: SimpleChanges){
   console.log('ngOnChnages called!');
   console.log('changes');
 }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

ngAfterContentInit(){
  console.log('ngAFterContentInit called!');
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!');
}

ngAfterViewInit(){
  console.log('ngAfterViewInIt Checked!')
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked Checked!')
}

ngOnDestroy(){
  console.log('ngOnDestroy Checked!')
}



}
