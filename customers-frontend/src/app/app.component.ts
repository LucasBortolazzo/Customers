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
  customers = [{id: '', name: '', age: ''}];
  rowData = [{id: '', name: '', age: ''}];
  rowDataClicked1 = {};
  frameworkComponents: any;

  getCustomers = () => {
    this.api.getAllCustomers().subscribe(
        data => {
          this.customers = data
          this.rowData = data;
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
}
