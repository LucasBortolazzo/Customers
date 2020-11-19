import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  //ActivatedRoute permite o acesso a várias coisas, por exemplo o id da URL
  constructor(private route: ActivatedRoute,
              private api: ApiService) { }
  
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

  loadCustomer(id) {    
    this.api.getCustomer(id).subscribe(
      data => {
        this.selected_customer = data;
      },
      error => {
        console.log('Aconteceu um erro', error)
      }
    ); 

  }
}
