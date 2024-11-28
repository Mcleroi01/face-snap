import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
  providers: [FaceSnapsService]
})
export class FaceSnapListComponent implements OnInit {


  facesnaps!: FaceSnap[];

  constructor (private facesnapsService: FaceSnapsService){}
 

  ngOnInit(): void {

    this.facesnaps = this.facesnapsService.getFaceSnaps();

    interval(1000).pipe(
      tap(console.log)
    ).subscribe();
    
 
  }
}
