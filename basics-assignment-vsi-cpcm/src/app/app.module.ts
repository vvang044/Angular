import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlpHerobannerComponent } from './plp-herobanner/plp-herobanner.component';
import { PlpCrosspromoComponent } from './plp-crosspromo/plp-crosspromo.component';

@NgModule({
  declarations: [
    AppComponent,
    PlpHerobannerComponent,
    PlpCrosspromoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
