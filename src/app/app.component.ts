import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap, take, delay, mergeMap, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  // ngOnInit() {
  //   interval(500).pipe(
  //     take(10),
  //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
  //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
  //     mergeMap(color => this.getTrainObservable$(color)),
  //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
  //   ).subscribe();
  // }

  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }
}
