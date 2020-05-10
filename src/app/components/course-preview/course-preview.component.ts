import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {

  constructor(
    public db: FirebaseService
  ) { }

  webcourses=[]
  mobilecourses=[]
  desktopcourses = []
  gamecourses = []
  networkcourses = []

  ngOnInit(): void {
    this.db.getCourses("web",3).subscribe(result =>{
      this.webcourses = result;
    })

    this.db.getCourses("mobile",3).subscribe(result =>{
      this.mobilecourses = result;
    })

    this.db.getCourses("desktop",3).subscribe(result =>{
      this.desktopcourses = result;
    })

    this.db.getCourses("game",3).subscribe(result =>{
      this.gamecourses = result;
    })

    this.db.getCourses("network",3).subscribe(result =>{
      this.networkcourses = result;
    })
  }

}
