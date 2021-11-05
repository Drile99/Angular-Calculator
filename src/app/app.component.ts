import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-simple-new-app';
  
  num1:number=0;
  num2:number=0;
  num3:number=0;
  fakt:number=0;
  num4:number=0;
  
  
  add(){
    this.num3 = this.num1 + this.num2;
  }
  
  sub(){
    this.num3= this.num1 - this.num2;
  }
  
  multiply()
  {
    this.num3= this.num1 * this.num2;
  }
  
  divide()
  {
    this.num3= this.num1 / this.num2;
  }
  
  faktorijel()
  {

    
    if(this.fakt===0)
    {
      this.num4=1;
    }
    else {
      for(let i=1;i<=this.fakt;i++)
      {
        this.num4 = this.num4 * i; 
      }

      this.fakt=0;
        }
    
  }
  
}
