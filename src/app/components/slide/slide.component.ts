import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imageURL: string;
  @Input() category: string

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateLink():void{
    this.router.navigate(["./courses",this.category])
  }

}
