import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
    //Initialisation des objets FaceSnap
    //On n'utilise pas new FaceSnap car pas de constructeur
    this.mySnap1 = {
      title: "Bella",
      description: "Couché de soleil magnifique pour des vacances de rêves 🤩 ! ",
      imageURL: "https://live.staticflickr.com/7085/28033641215_e44a875085_c.jpg",
      createDate: new Date(),
      snaps: 0,
      location: "Palavas-les-Flots"
    };
    this.mySnap2 = {
      title: "Jason",
      description: "Délicieux !!!",
      imageURL: "https://live.staticflickr.com/65535/49430910152_0070aaefbf_b.jpg",
      createDate: new Date(),
      snaps: 45,
      location: "Restaurant le Délice"
    };
    this.mySnap3 = {
      title: "Yellow",
      description: "Mon compagnon de route, il ne me quitte jamais ^^ ",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMvMA_h2spVzuDAqbtQIV51Dd8-amNMw6KA&usqp=CAU",
      createDate: new Date(),
      snaps: 29,
    };
  }
}
