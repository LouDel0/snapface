import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            title: "Bella",
            description: "Couché de soleil magnifique pour des vacances de rêves 🤩 ! ",
            imageURL: "https://live.staticflickr.com/7085/28033641215_e44a875085_c.jpg",
            createDate: new Date(),
            snaps: 0,
            location: "Palavas-les-Flots"
          },
          {
            title: "Jason",
            description: "Délicieux !!!",
            imageURL: "https://live.staticflickr.com/65535/49430910152_0070aaefbf_b.jpg",
            createDate: new Date(),
            snaps: 111,
            location: "Restaurant le Délice"
          },
          {
            title: "Yellow",
            description: "Mon compagnon de route, il ne me quitte jamais ^^ ",
            imageURL: "https://cdn.pixabay.com/photo/2023/03/01/14/09/dog-7823201_1280.jpg",
            createDate: new Date(),
            snaps: 350,
          }
    ];

    getAllFaceSnaps() : FaceSnap[] {
        return this.faceSnaps;
    }
}