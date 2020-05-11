import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  slides: Slide[] =[
    new Slide("Web Design","Create a fantastic web design, from basics to advaced, take a look at these courses that can help you improve your skills on mastering the web and create a fantastic website","web","../../../assets/illustrations/web.jpg"),
    new Slide("Mobile Programming","Go fully creative and develop your skill on creating mobile applications, be it android or IOS, we have them all!","mobile","../../../assets/illustrations/mobile.jpg"),
    new Slide("Desktop Application","Wan't to start being a Software Engineer? Look no further, we cover all from Java, C#, and Python applications","desktop","../../../assets/illustrations/desktop.jpg"),
    new Slide("Game Development","Tired of playing other games? Create your own! Try some of our courses to make you the ultimate game developer","game","../../../assets/illustrations/game.jpg"),
    new Slide("Computer Network & Security","Ever considered being a 'hacker'? Well here some courses to start your knowledge on networks and security","network","../../../assets/illustrations/network.jpg"),
  ];

  slideobj: HTMLElement[]
  dots: HTMLElement[]
  slidecount: number

  currIdx=0
  constructor() { }

  ngOnInit(): void {
    var doneRender = setInterval(function(){
      this.slideobj = []
      this.dots = []
      let sd = document.querySelectorAll(".slide")
      let d = document.querySelectorAll(".dot")
      
      this.slidecount = sd.length
      for(let i = 0 ; i < sd.length ; i++){
        this.slideobj.push(sd[i] as HTMLElement)
        this.dots.push(d[i] as HTMLElement)
      }

      this.clearSlide()
      this.showSlide(this.currIdx)
      if(sd.length>0&&d.length>0){
        clearInterval(doneRender)
        setInterval(function(){
          this.slideRight()
        }.bind(this), 5000)
      }

      
    }.bind(this), 100)
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
    if(this.currIdx>this.slidecount-1) this.currIdx = 0
    this.clearSlide();
    this.showSlide(this.currIdx)
  }

  slideLeft(){
    this.currIdx--
    if(this.currIdx<0) this.currIdx = this.slidecount-1
    this.clearSlide();
    this.showSlide(this.currIdx)
  }

  

}
