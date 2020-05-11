import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

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
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.course = null
    this.db.getCourseById(this.courseId).subscribe(res=>{
      this.course = res.payload.data()
    })
  }

  goToCourse(){
    this.router.navigate(['./learn/',this.courseId])
  }


  

}
