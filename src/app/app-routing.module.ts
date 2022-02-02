import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common'
import {LoginComponent} from "./page/login/login.component";
import {AdminPageComponent} from "./page/admin-page/admin-page.component";
import {HomePageAdminComponent} from "./page/home-page-admin/home-page-admin.component";
import {InsertCustomerComponent} from "./page/insert-modification-customer/insert-customer.component";
import {VisualizzaPrenotazioniComponent} from "./page/visualizza-prenotazioni/visualizza-prenotazioni.component";
import {InsertReservationComponent} from "./page/insert-reservation/insert-reservation.component";
import {ErrorPageComponent} from "./page/error-page/error-page.component";
import {ParcoVeicoliComponent} from "./page/parco-veicoli/parco-veicoli.component";
import {AggiungiModificaVeicoloComponent} from "./page/aggiungi-modifica-veicolo/aggiungi-modifica-veicolo.component";
import {CustomerPageComponent} from "./page/customer-page/customer-page.component";
import {HomePageCustomerComponent} from "./page/home-page-customer/home-page-customer.component";
import {LogoutComponent} from "./service/logout/logout.component";



export const ModuleAdmin_ROUTE: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homePageAdmin', component: AdminPageComponent }
];



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminPageComponent,
    children: [
      { path: '', component: HomePageAdminComponent},
      { path: 'profiloUtenti', component: HomePageAdminComponent},
      { path: 'inserisciCustomer', component: InsertCustomerComponent},
      { path: 'visualizzaPrenotazioni', component: VisualizzaPrenotazioniComponent},
      { path: 'visualizzaPrenotazioni/:userId', component: VisualizzaPrenotazioniComponent},
      { path: 'modificaPrenotazioni', component: InsertReservationComponent},
      { path: 'modificaPrenotazioni/:prenotazioneId', component: InsertReservationComponent},
      { path: 'parcoVeicoli', component: ParcoVeicoliComponent},
      { path: 'modificaUtente/:userId', component: InsertCustomerComponent},
      { path: 'modificaVeicolo', component: AggiungiModificaVeicoloComponent},
      { path: 'modificaVeicolo/:veicleId', component: AggiungiModificaVeicoloComponent},
      { path: 'logout', component: LogoutComponent},
    ]
  },
  {
    path: 'customer', component: CustomerPageComponent,
    children: [
      { path: '', component: HomePageCustomerComponent},
      { path: 'homePageCustomer', component: HomePageCustomerComponent},
      { path: 'parcoVeicoli', component: ParcoVeicoliComponent},
      { path: 'effettuaPrenotazione', component: InsertReservationComponent},
      { path: 'logout', component: LogoutComponent},
    ]
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DatePipe]
})
export class AppRoutingModule { }
