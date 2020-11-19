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

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.getCustomers();
  }



  getCustomers = () => {
    this.api.getAllCustomers().subscribe(
        data => {
          this.customers = data
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
