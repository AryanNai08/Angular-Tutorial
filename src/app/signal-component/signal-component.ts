import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css',
})
export class SignalComponent {
  count=signal(0);
  constructor(){
    effect(()=>{
      console.log(this.count());      
    })
  }

  x=signal(10);
  // y=signal<number>(20);
  y=signal(20);
  z=computed(()=>this.x()+this.y())

  showvalue(){
    console.log(this.z());
    this.x.set(200);
    console.log(this.z());
  }
    updatex(){
      this.x.set(200);  
    }

  
}
