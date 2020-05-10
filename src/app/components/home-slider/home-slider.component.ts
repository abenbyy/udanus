import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  slides: Slide[] =[
    new Slide("Programming","Description","./slide","../../../assets/illustrations/programming.jpg"),
    new Slide("Design","Description","./slide","../../../assets/illustrations/design.jpg"),
    new Slide("Business","Description","./slide","../../../assets/illustrations/business.jpg"),
    new Slide("Photography","Description","./slide","../../../assets/illustrations/photography.jpg"),
  ];

  slideobj: HTMLElement[]
  dots: HTMLElement[]

  currIdx=0
  constructor() { }

  ngOnInit(): void {
    window.onload = function(){
      this.slideobj = []
      this.dots = []
      let sd = document.querySelectorAll(".slide")
      let d = document.querySelectorAll(".dot")

      for(let i = 0 ; i < sd.length ; i++){
        this.slideobj.push(sd[i] as HTMLElement)
        this.dots.push(d[i] as HTMLElement)
      }

      this.clearSlide()
      this.showSlide(this.currIdx)


      
    }.bind(this)
  }

  clearSlide(){
    console.log(this.slideobj)
    for(let i = 0 ; i < this.slideobj.length ; i++){
      this.slideobj[i].style.display = "none"
      this.dots[i].className = this.dots[i].className.replace(" active", "")
    }
  }

  showSlide(idx){
    this.clearSlide()
    this.slideobj[idx].style.display="block"
    this.dots[idx].className+=" active"
  }

  slideRight(){
    this.currIdx++
    if(this.currIdx>3) this.currIdx = 0
    this.clearSlide();
    this.showSlide(this.currIdx)
  }

  slideLeft(){
    this.currIdx--
    if(this.currIdx<0) this.currIdx = 3
    this.clearSlide();
    this.showSlide(this.currIdx)
  }

  

}
