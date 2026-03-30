import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  // name=new FormControl('');
  // password=new FormControl('');

  // onLogin(){
  //   console.log('Name:', this.name.value);
  //   console.log('Password:', this.password.value);
  // }

  // setvalue(){
  //   this.name.setValue('Aryan B Nai');
  //   this.password.setValue('123456');
  // }

  myForm=new FormGroup({
    name:new FormControl(''),
    password:new FormControl('')
  });

  onSubmit(){
    console.log('Name:', this.myForm.value.name);
    console.log('Password:', this.myForm.value.password);
  }

  setvalue(){
    this.myForm.setValue({
      name:'Aryan B Nai',password:'123456'
    });
  }
}
