import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService{
    constructor(private http: HttpClient)
    {

    }
    public allCountries:any
    public GetAllCountries()
    {
        console.log("I am inside service begin")
        this.http.get('http://restCountries.eu/rest/v2/all').subscribe(success => {this.allCountries = success},
        error => { this.allCountries = error }
        )
        console.log('I am inside Service end')
        return this.allCountries
        
       
        }
        
    }

