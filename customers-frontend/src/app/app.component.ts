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
          console.log('chamou get')
        },
        error => {
          console.log('Aconteceu um erro', error)
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
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Editar'
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

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }
}
