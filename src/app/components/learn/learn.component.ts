import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  modules = []
  mcard = []
  mcontent = []
  mparagraph = []
  mcount = 0;
  constructor(
    public db: FirebaseService,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    var id = this.actRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.db.getModules(id).subscribe(res=>{
      if(res.length>0){
        this.modules = res
        this.mcount = res.length

        var doneRender = setInterval(function(){
          var temp = document.querySelectorAll('.content-cont')
          var temp2 = document.querySelectorAll('.module')
          var temp3 = document.querySelectorAll('.content')
          
          if(temp.length> 0 && temp2.length>0 && temp3.length>0){
            for(let i =0;i<temp.length;i++){
              this.mcontent.push(temp[i] as HTMLElement)
              this.mcard.push(temp2[i] as HTMLElement)
              this.mparagraph.push(temp3[i] as HTMLElement)
            }
            this.insertContent()
            this.showModule(0)
            clearInterval(doneRender)
          }
          
        }.bind(this), 100)

        
      }
      
    })

  }

  insertContent(){
    for(let i=0;i<this.mparagraph.length;i++){
      this.mparagraph[i].innerHTML = this.modules[i].payload.doc.data().content
    }
  }
  clearModules(){
    for(let i=0;i<this.modules.length;i++){
      this.mcontent[i].style.display = "none"
      this.mcard[i].className = this.mcard[i].className.replace(" activated", "")
      
    }
  }


  showModule(index: number){
    this.clearModules()
    this.mcontent[index].style.display = "block"
    this.mcard[index].className+=" activated"
  }

}
