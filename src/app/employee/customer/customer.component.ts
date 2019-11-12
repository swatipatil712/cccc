import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  employee : EmployeeModel[];

  constructor(private empService : EmployeeService) {
    this.employee = this.empService.getEmployee();
   }

  ngOnInit() {
  }

}
