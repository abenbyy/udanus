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

  getAllCourses(limit: number){
    return this.db.collection("courses", ref=> ref.limit(limit)).snapshotChanges()
  }

  getCourseById(id: string){
    return this.db.collection("courses").doc(id).snapshotChanges()
  }

  getUserByLogin(email: string, password: string){
    return this.db.collection("users", ref=> ref.where("email", "==", email).where("password","==",password)).snapshotChanges()
  }

  getUserByUsername(username: string){
    return this.db.collection("users", ref=> ref.where("username","==",username)).snapshotChanges()
  }

  getUserByEmail(email: string){
    return this.db.collection("users", ref=> ref.where("email","==",email)).snapshotChanges()
  }

  registerUser(username: string, email: string, password: string){
    return this.db.collection("users").add({
      'username': username,
      'password': password,
      'email': email,
    })
  }

  getModules(courseId: string){
    return this.db.collection("courses").doc(courseId).collection("modules").snapshotChanges()
  }
}
