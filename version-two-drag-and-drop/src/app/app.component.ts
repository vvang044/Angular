import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version-two-drag-and-drop';

   topFiveDrivers = [
    { name: 'LEWIS HAMILTON', car: 'MERCEDEZ', points: 413,
      poster:'https://media.gettyimages.com/photos/lewis-hamilton-of-great-britain-and-mercedes-gp-poses-during-the-of-picture-id644081218?s=2048x2048' },
    { name: 'VALTERRI BOTTAS', car: 'MERCEDEZ', points: 326,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Valtteri_Bottas_2014_Singapore_FP1.jpg' },
    { name: 'MAX VERSTAPPEN', car: 'HONDA', points: 278,
      poster:'https://upload.wikimedia.org/wikipedia/commons/1/13/Max_Verstappen_2016_Malaysia_FP3.jpg' },
    { name: 'CHARLES LECLERC', car: 'FERRARI', points: 264,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/F2-Race1%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AB%EF%BC%92_%2836957196236%29.jpg' },
    { name: 'SEBASTIAN VETTAL', car: 'FERRARI', points: 240,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Formula_One_Test_Days_2019_-_Ferrari_SF90_-_Sebastian_Vettel.jpeg' }
  ];

    bottomFiveDrivers = [
    { name: 'CARLOS SAINZ', car: 'RENAULT', points: 96,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Carlos_Sainz_Jr_2016_Malaysia_FP2_1.jpg' },
    { name: 'PIERRE GASLY', car: 'HONDA', points: 95,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Pierre_Gasly-Test_Days_2018_Circuit_Barcelona_%283%29.jpg' },
    { name: 'ALEXANDER ALBON', car: 'HONDA', points: 92,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/2/20/FIA_F1_Austria_2019_Nr._23_Albon_1.jpg' },
    { name: 'DANIEL RICCIARDO', car: 'RENAULT', points: 54,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Daniel_Ricciardo_2014_Singapore_FP2.jpg' },
    { name: 'SERGIO PEREZ', car: 'MERCEDEZ', points: 52,
      poster: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Sergio_Perez_2016_Malaysia_Q1.jpg' }
  ];


  drop(event: CdkDragDrop<{name: string,car: string, poster: string}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }





  // bottomFiveDrivers = [
  //   { name: 'CARLOS SAINZ', car: 'RENAULT', points: 96 },
  //   { name: 'PIERRE GASLY', car: 'HONDA', points: 95 },
  //   { name: 'ALEXANDER ALBON', car: 'HONDA', points: 92 },
  //   { name: 'DANIEL RICCIARDO', car: 'RENAULT', points: 54 },
  //   { name: 'SERGIO PEREZ', car: 'MERCEDEZ', points: 52 }
  // ];

}
