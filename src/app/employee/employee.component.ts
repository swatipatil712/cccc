import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeService } from '../services/employee.services';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : EmployeeModel[];

  constructor(private empService : EmployeeService) {
    this.employee = this.empService.getEmployee();
   }

  ngOnInit() {
  }

}
