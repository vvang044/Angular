import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VersiononeComponent } from './versionone/versionone.component';
import { VersiontwoComponent } from './versiontwo/versiontwo.component';

@NgModule({
  declarations: [
    AppComponent,
    VersiononeComponent,
    VersiontwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
