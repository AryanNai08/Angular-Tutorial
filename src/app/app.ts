import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
