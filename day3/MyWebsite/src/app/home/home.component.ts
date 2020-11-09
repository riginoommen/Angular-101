import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageName: string = 'My Home Page'
  variableOne: number = null;
  variableTwo: number = null;
  answer: number = null;
  operator: any;

  constructor() { }

  ngOnInit(): void {
  }

  process() {
    if(this.operator === '+'){
      this.answer = this.variableOne + this.variableTwo
    } else if(this.operator === '-'){
      this.answer = this.variableOne - this.variableTwo
    } else if(this.operator === '*'){
      this.answer = this.variableOne * this.variableTwo
    } else if(this.operator === '/'){
      this.answer = this.variableOne / this.variableTwo
    }
  }

}
