import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { NutritionistsComponent } from './nutritionists/nutritionists.component';
import { WellnesscouncilComponent } from './wellnesscouncil/wellnesscouncil.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    NutritionistsComponent,
    WellnesscouncilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
