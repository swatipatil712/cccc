import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdemo',
  templateUrl: './inputdemo.component.html',
  styleUrls: ['./inputdemo.component.css']
})
export class InputdemoComponent implements OnInit {

  employee : any[];

  

  constructor() { 
    this.employee = [
      {id : 101, name : "Raj", gender : "male", salary : 2000},
      {id : 102, name : "Ritika", gender : "female", salary : 2000},
      {id : 103, name : "Raj", gender : "male", salary : 2000},
      {id : 104, name : "Viha", gender : "female", salary : 2000}
    ]
  }
  getCountOfTotalEmployee() : number {
    return this.employee.length;
  }
getCountOfMaleEmployee() : number {
  return this.employee.filter(e =>e.gender.toLowerCase() == 'male').length;
}

getCountOfFemaleEmployee() : number {
  return this.employee.filter(e =>e.gender.toLowerCase() == 'female').length;
}
  ngOnInit() {
  }

}
