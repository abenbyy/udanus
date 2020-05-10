import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore,
  ) { }


  getCourses(category: string, limit: number){
    return this.db.collection("courses", ref=> ref.where("category","==",category).limit(limit)).snapshotChanges()
  }

  getCourseById(id: string){
    return this.db.collection("courses").doc(id).snapshotChanges()
  }
}
