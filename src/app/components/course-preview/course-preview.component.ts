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

  courses=[]

  ngOnInit(): void {
    this.db.getCourses("web",3).subscribe(result =>{
      this.courses = result;
      console.log(this.courses[0].payload.doc.id)
    })
  }

}
