import { Component } from '@angular/core';

@Component({
  selector: 'app-countercomponent',
  imports: [],
  templateUrl: './countercomponent.html',
  styleUrl: './countercomponent.css',
})
export class Countercomponent {
  counter:number=0;

  Increment(counter:number){
    this.counter=counter+1;
  }
  Decrement(counter:number){
    if(counter!=0){
this.counter=counter-1;
    }
    
  }
  Reset(counter:number){
    this.counter=0;
  }
}
