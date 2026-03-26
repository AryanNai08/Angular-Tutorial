import { Component } from "@angular/core";
import { TitleStrategy } from "@angular/router";
@Component({
        selector:'app-profile',
        templateUrl:'./profile.html',
        styleUrl:'./profile.css' ,
    })
export class ProfileComponenet {
 
    // button click event
    // age:number|string=25;

    // HandleClick(){
    //     alert("Button Clicked");
    //     console.log("Button Clicked");
    //     this.otherfun();    
    // }
    // otherfun(){
    //     console.log("Other function called");
    // }
    // changeAge(newAge: string | number) {
    // this.age = newAge;
    // }


    // get and set 
    name="";
    displayName="";
    getName(event:Event){
        this.name=(event.target as HTMLInputElement).value;
        
    }
    showName(){
        this.displayName=this.name;
    }
    setName(){
        this.name="Aryan";
    }

    //refrence template
    email="";
    showEmail(val:string){
        this.email=val;
    }
    setEmail(){
        this.email="aryannai941@gmail.com";
    }
}