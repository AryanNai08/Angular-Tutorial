import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Output() getUsers = new EventEmitter<string[]>();
  users= ["Aryan","kartik","Smith"];

  loadData(){
    this.getUsers.emit(this.users);
  }
}


