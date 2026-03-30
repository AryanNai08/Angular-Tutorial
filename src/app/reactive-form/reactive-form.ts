import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,NgIf],
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
  // onSubmit(){
  //   console.log('Name:', this.myForm.value.name);
  //   console.log('Password:', this.myForm.value.password);
  // }

  myForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.email])
  });


  get name(){
    return this.myForm.get('name');
  }

  get password(){
    return this.myForm.get('password');
  }
  get email(){
    return this.myForm.get('email');
  }

    onSubmit() {
    console.log(this.myForm.value);
  }

  // setvalue(){
  //   this.myForm.setValue({
  //     name:'Aryan B Nai',password:'123456'
  //   });
  // }
}
