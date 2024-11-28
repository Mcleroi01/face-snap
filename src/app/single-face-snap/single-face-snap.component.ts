import { Component, Input, input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
  providers: [FaceSnapsService]
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  btn!: String
  userhasSnapeed!: Boolean;
  myLargeNumber = 1234567.0
  myresult = 0.2337
  mycurrenci = 40.2337

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.btn = "😣"
    this.userhasSnapeed = false;
    const facesnapId=this.route.snapshot.params['id'];
    this.faceSnapService.getFaceSnapById(facesnapId)
  }

  onAddSnap(): void {
    if (this.userhasSnapeed) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  snap() {
    if (this.faceSnap && this.faceSnap.id) {
      try {
        this.faceSnapService.snapFaceById(this.faceSnap.id);
        this.btn = "😍";
        this.userhasSnapeed = true;
      } catch (error) {
        console.error('Erreur lors du snap:', error);
      }
    }
  }

  unSnap() {
    if (this.faceSnap) {
      this.faceSnap.removeSnap();
      this.userhasSnapeed = false;
      this.btn = "😣";
    }
  }

}
