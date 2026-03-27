import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  login=false
  color="red"
  students=["s1","s2","s3"]

  studentdata=[
    {name:"s1",age:20},
    {name:"s2",age:21},
    {name:"s3",age:22}
  ]
  
}
