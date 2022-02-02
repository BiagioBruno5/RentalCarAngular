import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
