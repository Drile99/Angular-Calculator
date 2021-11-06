import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-simple-new-app';
  
  //Inicijalizacija i deklaracija promenljivih
  num1:number=0;
  num2:number=0;
  num3:number=0;
  fakt:number=0;
  num4:number=0;
  
  //Funkcija za sabiranje dva broja
  add(){
    this.num3 = this.num1 + this.num2;
  }
  //Funkcija za oduzimanje dva broja
  sub(){
    this.num3= this.num1 - this.num2;
  }
  //Funkcija za mnozenje dva broja
  multiply()
  {
    this.num3= this.num1 * this.num2;
  }
  //Funkcija za deljenje dva broja
  divide()
  {
    this.num3= this.num1 / this.num2;
  }
  
  //Funkcija za faktorijel
  faktorijel()
  {
    //Ako je unet broj 0 rezultat je 1
    if(this.fakt===0)
    {
      this.num4=1;
    }
    //Ukoliko nije racuna faktorijel tako sto for petlja ide od 1 do broja unetog od strane korisnika  
    else {
      for(let i=1;i<=this.fakt;i++)
      {
        this.num4 = this.num4 * i; 
      }

      this.fakt=0;
        }
    
  }
  
}
