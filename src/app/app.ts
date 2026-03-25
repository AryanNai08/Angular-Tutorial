import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponenet } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,ProfileComponenet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
  protected readonly name = signal('Aryan Nai');  
  helloworld(){
    let x=20;
    console.log(x);
  }
}
