import { Component, Input, input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import {  TitleCasePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  providers: [FaceSnapsService]
})
export class FaceSnapComponent {



  @Input() faceSnap!: FaceSnap;


  btn!: String
  userhasSnapeed!: Boolean;
  myLargeNumber = 1234567.0
  myresult = 0.2337
  mycurrenci = 40.2337

  constructor(private router: Router) { }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

  



}
