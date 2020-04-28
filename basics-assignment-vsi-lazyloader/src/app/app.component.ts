import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-vsi-lazyloader';

    //create an instance of intersection observer, a constructor that takes two  parameters
    // one parameter is an array that consists the image elements second is the instance of Intersection Oberserver
   ImageToObserve = new IntersectionObserver((array,ImageToObserve) => {

    //loop through the array 
    array.forEach((entry) => {
          if(entry.isIntersecting){
            const lazyImage = (entry.target);
           //setting the image source
            lazyImage.src = lazyImage.dataset.src;
          }
        })
    })

    //<img class="lazy_load_image" data-src="image_1.jpg">
    images = document.querySelectorAll('img.lazy_load_image');
    images.forEach(image => {
      ImageToObserve.observe(Image);
    });




}

