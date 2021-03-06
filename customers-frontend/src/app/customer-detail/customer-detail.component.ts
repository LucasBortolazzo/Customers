import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  //ActivatedRoute permite o acesso a várias coisas, por exemplo o id da URL
  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private router: Router,
              private componente: AppComponent) { }
  
  selected_customer =  {id: '', name: '', age: '', city: ''};
  selected_id;

  ngOnInit(): void {
    //Cria um observer no parâmetro da url, pra atualizar o componente customer-detail toda vez que um customer for selecionado
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;

      this.loadCustomer(id);      
    }    
    );
  }

  ShowMessageSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Customer '+ this.selected_customer.name + ' updated successfully!',
      showConfirmButton: false,
      timer: 1000,
    
    })
  }  

  loadCustomer(id) {    
    this.api.getCustomer(id).subscribe(
      data => {
        this.selected_customer = data;
      },
      error => {
        console.log('There was an error loading the record', error)
      }
    ); 
  }

  updateCustomer(){
    this.api.updateCustomer(this.selected_customer).subscribe(
      data => {
        this.selected_customer = data;
        this.router.navigate(['/'])  
        this.componente.getCustomers();
        this.ShowMessageSuccess();
      },
      error => {
        console.log('An error occurred while updating the registry', error)
      }
    );     
  }

  cancelCustomer(){
    this.router.navigate(['/'])   
  }  
}
