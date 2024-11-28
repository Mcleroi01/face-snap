import { Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap";

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            0,
            new Date(),
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
        ),
        (() => {
            const snap = new FaceSnap(
                'Mcleroi',
                'Mon meilleur ami depuis tout petit !',
                150,
                new Date(),
                'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
            );
            snap.setLocation('À la montagne');
            return snap;
        })(),
    ];


    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    snapFaceById(faceSnapId: string): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            console.warn(`FaceSnap with ID ${faceSnapId} not found!`);
            return;
        }
        foundFaceSnap.addSnap();
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }
}