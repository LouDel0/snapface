import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

//Décorateur : apporte des modifications à une classe
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  //Initialisation du component
  ngOnInit(): void {
    this.buttonText = "Oh Snap !";
  }

  //Ajouter un événement TS
  onSnap() {
    if(this.buttonText === "Oh Snap !") {
      this.faceSnap.snaps++;
      this.buttonText = "UnSnap"
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap !";
    }
  }
}
