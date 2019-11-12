import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Employee1Service{
 employee1 : any[];
 private url = "assets/data/emp.json";

 private  url1 = "http://restCountries.eu/rest/v2/all";

 constructor(private http : HttpClient ){

 }
 getEmployees() : Observable<any[]>{
     return this.http.get<any[]>(this.url);
 }

 getCountries() : Observable<any[]>{
    return this.http.get<any[]>(this.url1);
}
}