import { Injectable, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';

@Injectable()
export class EmployeeService {
 employee : EmployeeModel[];
 constructor()
 {
     this.employee = [
         {id : 101, name : "Swati", gender : "female" , salary : 2000, doj : "01/02/2019"},
         {id : 102, name : "Raj", gender : "male" , salary : 3000, doj : "01/05/2019"},
         {id : 103, name : "Viha", gender : "female" , salary : 4000, doj : "01/07/2019"},
         {id : 104, name : "Trupti", gender : "female" , salary : 5000, doj : "01/12/2019"},
         {id : 105, name : "Seema", gender : "female" , salary : 6000, doj : "01/08/2019"},
         {id : 106, name : "Mahesh", gender : "male" , salary : 6000, doj : "01/02/2019"}


     ] 
 }
  getEmployee() : EmployeeModel[]{
      return this.employee;
  }
 
}