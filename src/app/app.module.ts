import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.services';
import { CustomerComponent } from './employee/customer/customer.component';
import { Employee1Component } from './employee1/employee1.component';
import { Employee1Service } from './services/employee1.service';
import { DemoComponent } from './demo/demo.component';
import { ChildDemoComponent } from './demo/child-demo/child-demo.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { ChildInputdemoComponent } from './inputdemo/child-inputdemo/child-inputdemo.component';
import { EmptitlePipe } from './pipes/emptitle.pipe';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    Employee1Component,
    DemoComponent,
    ChildDemoComponent,
    InputdemoComponent,
    ChildInputdemoComponent,
    EmptitlePipe,
    UserComponent,
    CountryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [EmployeeService, Employee1Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
