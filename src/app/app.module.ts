import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {CoreModule} from "./core/core.module";
import { InsertReservationComponent } from './page/insert-reservation/insert-reservation.component';
import { InsertCustomerComponent } from './page/insert-modification-customer/insert-customer.component';
import { HomePageAdminComponent } from './page/home-page-admin/home-page-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { VisualizzaPrenotazioniComponent } from './page/visualizza-prenotazioni/visualizza-prenotazioni.component';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { ParcoVeicoliComponent } from './page/parco-veicoli/parco-veicoli.component';
import { AggiungiModificaVeicoloComponent } from './page/aggiungi-modifica-veicolo/aggiungi-modifica-veicolo.component';
import { CustomerPageComponent } from './page/customer-page/customer-page.component';
import { HomePageCustomerComponent } from './page/home-page-customer/home-page-customer.component';
import { LogoutComponent } from './service/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertReservationComponent,
    InsertCustomerComponent,
    HomePageAdminComponent,
    AdminPageComponent,
    VisualizzaPrenotazioniComponent,
    ErrorPageComponent,
    ParcoVeicoliComponent,
    AggiungiModificaVeicoloComponent,
    CustomerPageComponent,
    HomePageCustomerComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
