import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-componenet',
  imports: [],
  templateUrl: './effect-componenet.html',
  styleUrl: './effect-componenet.css',
})
export class EffectComponenet {
  count=signal(0);
  displayheading=signal(false);

  constructor(){
    effect(()=>{
      if(this.count()==2){
        this.displayheading.set(true);
        setTimeout(() => {
          this.displayheading.set(false);
        }, 2000);
      }else{
        this.displayheading.set(false);
      }
    })
  }
  inccount(){
    this.count.set(this.count()+1);
  }
}
