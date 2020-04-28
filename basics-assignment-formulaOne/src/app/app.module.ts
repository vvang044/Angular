import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountdownModule } from 'ngx-countdown'

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

//import the Drag and Drop module from the cdk
@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    CountdownTimerModule.forRoot(),
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
