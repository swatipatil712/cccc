import { Component, OnInit } from '@angular/core';
//import {UserService} from './user.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  providers:[UserService]
})
export class CountryComponent implements OnInit {
  
  title='HttpClient Service Demo'
  public mycountryInfo:any
  
  ngOnInit(): void {
    this.GetAllCountriesInfo()
  }
  GetAllCountriesInfo() {
    console.log('I am inside component')
  this.mycountryInfo=this.userservice.GetAllCountries()
    
  }
 
 
  constructor(private userservice:UserService) { }

}
//public GetAllCountriesInfo(){
  //console.log('I am inside component')
  //this.myUserInfo=this.usrService.GetAllUser()
//}
