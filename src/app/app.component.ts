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
    this.mySnap1 = new FaceSnap(
      "Bella",
      "Couché de soleil magnifique pour des vacances de rêves 🤩 ! ",
      "https://live.staticflickr.com/7085/28033641215_e44a875085_c.jpg",
      new Date(),
      0,
    );
    this.mySnap2 = new FaceSnap(
      "Jason",
      "Délicieux !!!",
      "https://live.staticflickr.com/65535/49430910152_0070aaefbf_b.jpg",
      new Date(),
      45,
    );
    this.mySnap3 = new FaceSnap(
      "Yellow",
      "Mon compagnon de route, il ne me quitte jamais ^^ ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMvMA_h2spVzuDAqbtQIV51Dd8-amNMw6KA&usqp=CAU",
      new Date(),
      29,
    );
  }
}
