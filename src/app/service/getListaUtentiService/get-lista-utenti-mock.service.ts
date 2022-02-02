import { Injectable } from '@angular/core';
import {MyButtonConfig} from "../../core/button/button.config";
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
export class GetListaUtentiMockService {

  constructor(private router: Router) { }

  public buttonConfiguration: MyButtonConfig = {customCssClass: "padding: 10px 40px;", text: "ciao", icon: "ciao"};

  public header: MyHeaders[] = [
    {key: "id", label: "idHeader"},
    {key: "nome", label: "nomeHeader"},
    {key: "cognome", label: "cognomeHeader"},
    {key: "dataNascita", label: "dataNascitaHeader"},
    {key: "password", label: "password"}
  ];

  public order: MyOrder = {defaultColumn: 0, orderType: ""};

  public search: MySearch = {columns: []};

  public paginazione: MyPagination = {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20]};

  public actions: MyTableActionEnum[] = [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE, MyTableActionEnum.SHOW];

  public headTable: MyTableConfig = {headers: this.header, order: this.order, search: this.search, pagination: this.paginazione, actions: this.actions};

  public popolazioneDada: any[] = [
    {id: 1, nome: 'ADMIN', cognome:'ADMIN', dataNascita: new Date("1998-10-13").toDateString(), password: 'ADMIN'},
    {id: 2, nome: 'CUSTOMER', cognome:'CUSTOMER', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 3, nome: 'Biagio', cognome:'Bruno', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 4, nome: 'Luigi', cognome:'Durso', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 5, nome: 'Giacomino', cognome:'Diquarto', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 6, nome: 'Sara', cognome:'Menta', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 7, nome: 'Tony', cognome:'Montana', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 8, nome: 'Al', cognome:'Pacino', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 9, nome: 'Roberto', cognome:'Deniro', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 10, nome: 'Giacomino', cognome:'Diquarto', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 11, nome: 'Giuseppe', cognome:'Rosso', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 12, nome: 'Vincenzo', cognome:'Gasolio', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 13, nome: 'Maruska', cognome:'Adowskina', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 14, nome: 'Giacomino', cognome:'Rosso', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 15, nome: 'Roberto', cognome:'Bevilacqua', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 16, nome: 'Biagio', cognome:'Menta', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 17, nome: 'Pino', cognome:'Pino', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 18, nome: 'Sara', cognome:'Durso', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 19, nome: 'Vincenzo', cognome:'Deniro', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
    {id: 20, nome: 'Roberto', cognome:'Roberto', dataNascita: new Date("1998-10-13").toDateString(), password: 'CUSTOMER'},
  ];

  returnHeadTable = () =>{
    return this.headTable;
  }

  returnData = () =>{
    return this.popolazioneDada;
  }

  getUserByNameAndPassword = (nomeUtente: string, pwd: string) =>{
    let elemento: any = {};
    this.popolazioneDada.forEach((element) => {
      if(element.nome === nomeUtente && element.password === pwd){
        elemento = element;
      }
    });
    return elemento;
  }

  getUserById = (idUser: number) =>{
    let elemento: any = {};
    this.popolazioneDada.forEach((element) => {
      if(element.id == idUser){
        elemento = element;
      }
    });
    return elemento;
  }

  delateUserById = (idUser: number) =>{
    this.popolazioneDada.forEach((element, index) => {
      if(element.id == idUser){
       this.popolazioneDada.splice(index, 1)
      }
    });
  }

  userModificationViaId = (idUser: number, nomeUser: string, cognomeUser: string, dataUser: Date) => {
    this.popolazioneDada.forEach((element) => {
      if(element.id === idUser){
        element.nome = nomeUser;
        element.cognome = cognomeUser;
        element.dataNascita = dataUser;
      }
    });
    this.router.navigate(['admin']);
  }

  salvaUtente = (utente: any) => {
    this.popolazioneDada.push(utente);
  }
  getNewId = () => {
    let id: number = 0;
    this.popolazioneDada.forEach((element) => {
      id = element.id;
    });
    id = id + 1;
    return id++;
  }
}
