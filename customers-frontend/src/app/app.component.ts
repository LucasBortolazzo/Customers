import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customers-frontend';
  customers = [{id: '', name: '', age: ''}];

  columnDefs = [
    { field: 'id', sortable: true, filter: true },
    { field: 'name', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'city', sortable: true, filter: true }
];

rowData = [{id: '', name: '', age: ''}];
  
  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.getCustomers();
  }

  onGridReady(params){

  }

  getCustomers = () => {
    this.api.getAllCustomers().subscribe(
        data => {
          this.customers = data
          this.rowData = data;
        },
        error => {
          console.log('Aconteceu um erro', error)
        }
    );    
  }

  customerClicked = (customer) => {
    this.router.navigate(['customer-detail', customer.id])      
  }
}
