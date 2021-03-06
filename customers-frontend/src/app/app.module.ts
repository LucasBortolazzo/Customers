import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { FormsModule } from '@angular/forms';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    ButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
