import { SafePropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-control-flow-component',
  imports: [],
  templateUrl: './control-flow-component.html',
  styleUrl: './control-flow-component.css',
})
export class ControlFlowComponent {
  display=true;
  toggled=true;
  toggle(){
    this.display=!this.display;
  }
  toggleDiv(){
    this.toggled=!this.toggled;
  }
  color=0;
  HandleColor(color:number){
    this.color=color;
  }
  HandleEvent(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value);
  }

  switchcolor="black"
  HandleColorSwtich(switchcolor:string){
    this.switchcolor=switchcolor;
  }

  users:string[]=["Aryan","Kartik","Nikhil","Bhano"];
  students=[
    {name:'Aryan',email:'aryannai941@',age:20},
    {name:'kartik',email:'kartik87@',age:20},
    {name:'Nikhil',email:'nikhil@',age:20},
  ]
  email="";
  getmail(email:string){
    this.email=email;
  }
}
