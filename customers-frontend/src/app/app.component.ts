import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customers-frontend';

  baseUrl = 'http://localhost:8000/customers/';
  currentlUrl = 'http://localhost:8000/customers/';

  customers = [{id: '', name: '', age: ''}];
  rowData = [{id: '', name: '', age: ''}];
  rowDataClicked1 = [{id: '', name: '', age: ''}];
  searchfield = '';
  frameworkComponents: any;
  page_next='';
  page_previous='';

  getCustomers = () => {
    this.api.getAllCustomers(this.currentlUrl).subscribe(
        data => {
          this.customers = data
          this.rowData = data.results;
          this.page_next = this.currentlUrl;
          this.page_previous = this.currentlUrl;

          if (data.next) {
            this.page_next = data.next;
          }

          if (data.previous) {
            this.page_previous = data.previous;
          }

        },
        error => {
          console.log('There was an error loading records', error)
        }
    );    
  }

 columnDefs = [
    { field: 'id', sortable: true, filter: true},
    { field: 'name', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'city', sortable: true, filter: true },
    {
      headerName: '',
      width: 138,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnEditClick.bind(this),
        label: 'Edit'
      }
    },
]; 

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
    this.getCustomers();
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  onBtnEditClick(e) {
    this.rowDataClicked1 = e.rowData;
  }

  fetchNext() {
    if (this.currentlUrl != this.page_next) {
      this.currentlUrl = this.page_next;
      this.getCustomers();
    }
  }

  fetchPrevious() {
    if (this.currentlUrl != this.page_previous) {
      this.currentlUrl = this.page_previous;
      this.getCustomers();
    }
  }  

  searchCustomers() {
    var search = ((document.getElementById("searchField") as HTMLInputElement).value);
    this.currentlUrl = this.baseUrl;

    if (search != '') {
      this.currentlUrl = this.baseUrl + '?search='+ search;
    }
     
    this.getCustomers();
}
}
