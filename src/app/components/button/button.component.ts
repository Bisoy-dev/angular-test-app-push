import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonName: string = "Click me!";
  buttonColor:string = "";
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
  } 
  increment(){
    this.count = this.count + 1;
  }
  decrement(){
    if(this.count > 0){
      this.count = this.count - 1;
    }else{
      alert("Negative number is not allowed to be decrement.");
    }
  }

}
