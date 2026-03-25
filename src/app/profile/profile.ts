import { Component } from "@angular/core";
import { TitleStrategy } from "@angular/router";
@Component({
        selector:'app-profile',
        templateUrl:'./profile.html',
        styleUrl:'./profile.css' ,
    })
export class ProfileComponenet {
 
    HandleClick(){
        alert("Button Clicked");
        console.log("Button Clicked");
        this.otherfun();    
    }
    otherfun(){
        console.log("Other function called");
    }
}