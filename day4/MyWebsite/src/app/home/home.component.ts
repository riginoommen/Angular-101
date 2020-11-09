import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

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
  apiResponse: [ApiResponseType];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.fetchResponse().subscribe(data =>{
      this.apiResponse = data;
    })
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
