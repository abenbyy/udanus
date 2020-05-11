import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = []
  noResult = false
  constructor(
    private actRoute: ActivatedRoute,
    public db: FirebaseService,
  ) { }

  ngOnInit(): void {
    var category = this.actRoute.snapshot.paramMap.get('category')
    if(category === "all"){
      this.db.getAllCourses(10).subscribe(res=>{
        if(res.length > 0){
          this.courses = res
        }else{
          this.noResult = true
        }
      })
    }else{
      this.db.getCourses(category, 10).subscribe(res=>{
        if(res.length>0){
          this.courses = res
        }else{
          this.noResult = true
        }
      })
    }
  }

}
