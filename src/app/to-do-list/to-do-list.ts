import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task=""
  tasklist:{id:number,task:string}[]=[]

  Add(){
    this.tasklist.push({id:this.tasklist.length+1,task:this.task})  
  }
  Delete(id:number){
    this.tasklist=this.tasklist.filter((task)=>task.id!=id);
  }
}
