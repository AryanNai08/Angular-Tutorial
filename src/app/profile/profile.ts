import { Component } from "@angular/core";
import { TitleStrategy } from "@angular/router";
@Component({
        selector:'app-profile',
        templateUrl:'./profile.html',
        styleUrl:'./profile.css' ,
    })
export class ProfileComponenet {
 
    age:number|string=25;

    HandleClick(){
        alert("Button Clicked");
        console.log("Button Clicked");
        this.otherfun();    
    }
    otherfun(){
        console.log("Other function called");
    }
    changeAge(newAge: string | number) {
    this.age = newAge;
    }
}