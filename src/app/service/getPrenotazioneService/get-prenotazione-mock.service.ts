import { Injectable } from '@angular/core';
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActionEnum,
  MyTableConfig
} from "../../core/table/table.config";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GetPrenotazioneMockService {

  constructor(private router: Router) { }

  public header: MyHeaders[] = [
    {key: "numeroPrenotazione", label: "Numero Prenotazione"},
    {key: "idUtente", label: "Id utente"},
    {key: "dataInizio", label: "Data Inizio"},
    {key: "dataFine", label: "Data Fine"},
  ];

  public order: MyOrder = {defaultColumn: 0, orderType: ""};

  public search: MySearch = {columns: []};

  public paginazione: MyPagination = {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20]};

  public actions: MyTableActionEnum[] = [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];


  public headTable: MyTableConfig = {headers: this.header, order: this.order, search: this.search, pagination: this.paginazione, actions: this.actions};

  public popolazioneDada: any[] = [
    {numeroPrenotazione: 1, idUtente: 2, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 2, idUtente: 2, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 3, idUtente: 2, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 4, idUtente: 5, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 5, idUtente: 6, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 6, idUtente: 7, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 7, idUtente: 8, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 8, idUtente: 13, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 9, idUtente: 10, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 10, idUtente: 10, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 11, idUtente: 4, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 12, idUtente: 4, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 13, idUtente: 4, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 14, idUtente: 3, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 15, idUtente: 3, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 16, idUtente: 3, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()},
    {numeroPrenotazione: 17, idUtente: 3, dataInizio: new Date("2021-10-13").toDateString(), dataFine: new Date("2021-10-20").toDateString()}
  ];

  returnHeadTable = () =>{
    return this.headTable;
  }

  returnHeadTableCustomer = () =>{
    return this.headTable;
  }

  returnData = () =>{
    return this.popolazioneDada;
  }

  getDataByIdUtente = (idUtente: number) => {
    let prenotazione: any[] = [];
    this.popolazioneDada.forEach((element) => {
      if(element.idUtente == idUtente){
        prenotazione.push(element);
      }
    });
    console.log(prenotazione)
    return prenotazione;
  }

  getPrenotazioneById = (idPrenotazione: number) => {
    let prenotazione: any = {};
    this.popolazioneDada.forEach((element) => {
      if(element.numeroPrenotazione == idPrenotazione){
        prenotazione = element;
      }
    });
    return prenotazione;
  }

  eliminaPrenotazioneById = (idPrenotazione: number) => {
    this.popolazioneDada.forEach((element, index) => {
      if(element.numeroPrenotazione == idPrenotazione){
        this.popolazioneDada.splice(index, 1);
      }
    });
  }


  prenotazioneModificationById = (prenotazione: any) => {
    this.popolazioneDada.forEach((element) => {
      if(prenotazione.numeroPrenotazione == element.numeroPrenotazione){
       element.dataInizio = prenotazione.dataInizio;
       element.dataFine = prenotazione.dataFine;
      }
    });
    this.router.navigate(['admin/modificaPrenotazioni', prenotazione.numeroPrenotazione]);
  }

  salvaPrenotazione = (prenotazione: any) => {
    this.popolazioneDada.push(prenotazione);
  }

  getNewNumeroPrenotazione = () => {
    let numero : number = 0;
    this.popolazioneDada.forEach((element) => {
      numero = element.numeroPrenotazione;
    });
    numero = numero + 1;
    return numero;
  }
}
