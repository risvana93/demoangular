import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  num1:string="Enter a first number"
  num2:string="Enter a second number"

  fun(){
    console.log("Change event binded")
  }
  clicked(){
    console.log("Button clicked")
  }
}
