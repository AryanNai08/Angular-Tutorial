import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponenet } from './profile/profile';
import { count } from 'rxjs';
import { Countercomponent } from './countercomponent/countercomponent';
import { StyleOperaterComponenet } from './style-operater-componenet/style-operater-componenet';
import { ControlFlowComponent } from './control-flow-component/control-flow-component';
import { SignalComponent } from './signal-component/signal-component';
import { EffectComponenet } from './effect-componenet/effect-componenet';
import { ToDoList } from './to-do-list/to-do-list';
import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,ProfileComponenet,Countercomponent,StyleOperaterComponenet,ControlFlowComponent,SignalComponent,EffectComponenet,ToDoList,Directives],
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
