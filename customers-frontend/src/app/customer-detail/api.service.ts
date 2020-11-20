import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCustomer(id): Observable<any> {
    console.log('chamando customer por ID 2')
    return this.http.get(this.baseUrl + 'customers/' + id + '/',
    {headers: this.httpHeaders});
  }  
  
  updateCustomer(customer): Observable<any> {
    return this.http.put(this.baseUrl + 'customers/' + customer.id + '/', customer,
    {headers: this.httpHeaders});
  }   
}
