import { Component, OnInit } from '@angular/core';

//Décorateur : apporte des modifications à une classe
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;

  //Initialisation du component
  ngOnInit(): void {
    //Initialisation en dur des propriétés
    this.title = "Bella";
    this.description = "Couché de soleil magnifique pour des vacances de rêves 🤩 ! ";
    this.createDate = new Date();
    this.snaps = 654;
    this.imageUrl = "https://live.staticflickr.com/7085/28033641215_e44a875085_c.jpg";
  }
}
