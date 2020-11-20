import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-renderer',
  template: '<button class="button primary" type="button" (click)="onClick($event)">{{label}}</button>'
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  constructor(private router: Router) {}

  params;
  label: string;
  

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);
      this.router.navigate(['customer-detail', params.rowData.id])      
    }
  }
}