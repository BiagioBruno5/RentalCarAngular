import { Component } from '@angular/core';
import {MyButtonConfig} from "./core/button/button.config";
import {MyHeaders, MyOrder, MyPagination, MySearch, MyTableConfig} from "./core/table/table.config";
import {MyReservationConfig} from "./page/insert-reservation/reservationConfig";
import {GetListaUtentiMockService} from "./service/getListaUtentiService/get-lista-utenti-mock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalCarAngular';

  constructor(private getLista: GetListaUtentiMockService) { }

  //configurazione per l'inserimento della prenotazione
  //public reservationConfiguration: MyReservationConfig = {dataInizio: new Date(), dataFine: new Date(), veicolo: ""};

  show: boolean = false;

  handleEdit = (cod: string) =>{
    if(cod === "true"){
      this.show = true;
    }
  }
}
