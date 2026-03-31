import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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
import { Header } from './header/header';
import { PassData } from './pass-data/pass-data';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { User } from './user/user';
import { ChildComponent } from './child-component/child-component';
import { ProductItem, ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,ProfileComponenet,Countercomponent,StyleOperaterComponenet,ControlFlowComponent,SignalComponent,EffectComponenet,ToDoList,Directives,RouterOutlet,RouterLink,Header,PassData,ReactiveForm,TemplateForm,User,ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: ProductItem[] = [];

  constructor(private productService: ProductService) {
  }

  protected readonly title = signal('angular-app');
  protected readonly name = signal('Aryan Nai');  
  helloworld(){
    let x=20;
    console.log(x);
  }

  users= [{
    id:1,
  name:'Aryan',
  city:'Pune',
  course:'Angular'
  },
  {
    id:2,
    name:'John',
    city:'Mumbai',
    course:'React'
  },
  {
    id:3,
    name:'Smith',
    city:'Delhi',
    course:'Vue'
  }
    ];

    username="";
    OnChange(user:string){
      this.username=user;
    }
    userss: string[] = [];
    handleUsers(userss:string[]){
      console.log("Users from child component:", userss);
      this.userss = userss;
    }

    productslist:any;

    getproducts(){
      this.productService.getProductlist().subscribe((data:any)=>{
        console.log(data);
        this.productslist=data.products;
      })
    
}
}