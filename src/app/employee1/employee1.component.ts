import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../services/employee1.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {
    employee1 : any[];
    countries : any[]
  constructor(private empService :Employee1Service) { 
    this.empService.getEmployees().subscribe(data => this.employee1 = data)

    this.empService.getCountries().subscribe(data => this.countries = data);
  }

  ngOnInit() {
  }
}
