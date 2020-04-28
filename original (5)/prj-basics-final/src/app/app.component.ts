import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //store this feature
  loadedFeature = 'receipe';

  //where do we navigate to 
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
