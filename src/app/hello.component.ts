import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable, Observer} from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;
private customSubscription : Subscription

  ngOnInit(){
    let count = 0;
     const customerObservable = Observable.create(observer =>
     {
       setInterval(()=>{
      observer.next(count);
      count++; 
       },5000);
     });

    this.customSubscription = customerObservable.subscribe(data => {
     console.log(data);}
     )
  }

  ngOnDestroy(){
    this.customSubscription.unsubscribe();
  }
}
