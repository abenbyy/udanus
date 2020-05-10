import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() courseId

  course

  constructor(
    public db: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.course = null
    this.db.getCourseById(this.courseId).subscribe(res=>{
      this.course = res.payload.data()
    })
  }


  

}
