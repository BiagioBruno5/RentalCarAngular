import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MyButtonConfig } from '../button/button.config';
import {MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionEnum, MyTableConfig} from "./table.config";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  public buttonConfiguration: MyButtonConfig = {customCssClass: "padding: 6px 20px;", text: "Filtra", icon: "Filtra"};

  public buttonConfigurationAggiunta: MyButtonConfig = {customCssClass: "padding: 6px 20px;", text: "Aggiungi", icon: "Aggiungi"};

  public buttonConfigurationTable: MyButtonConfig[] = [];

  inizioDatiDaAnalizzare: number = 0;

  fineDatiDaAnalizzare: number = 0;

  ngOnInit(): void {
    this.fineDatiDaAnalizzare = this.tableConfig.pagination.itemPerPage;

    this.tableConfig.actions.forEach((element, index) =>{
      // @ts-ignore
      this.buttonConfigurationTable[index] = {customCssClass: "padding: 6px 20px;", text: element, icon: element};
    });
  }

  header: MyHeaders[] = [{key: "default", label: "default"}];

  order: MyOrder = {defaultColumn: 0, orderType: ""};

  search: MySearch = {columns: []}


  paginazione: MyPagination = {itemPerPage: 0, itemPerPageOptions: []};

  ricercaElemento: string = "";


  @Input ()
  tableConfig : MyTableConfig = {headers: this.header, order: this.order, search: this.search, pagination: this.paginazione, actions: []};

  @Input ()
  data : any [] = [];

  @Input()
  buttonConfigurations: MyButtonConfig[] = [];

  @Input()
  aggiunta: boolean = false;

  @Output()
  addClient = new EventEmitter();

  @Output()
  button = new EventEmitter();

  buttonFunction = (dato: any, action:any) => {
    let obj: any = {datoAna: dato, actionAna: action};
    this.button.emit(obj);
  }

  aggiungiF = () => {this.addClient.emit("visualizza prenotazioni")}

  onChange(newValue: number) {

    if((this.fineDatiDaAnalizzare - this.inizioDatiDaAnalizzare) != newValue){
      this.fineDatiDaAnalizzare = +this.inizioDatiDaAnalizzare + +newValue;
    }

    this.tableConfig.pagination.itemPerPage = +newValue;
  }

  //Visualizza più elementi all'interno della tabella
  fine: boolean = false;
  visualizzaElementi = () : void => {
    let max: number = this.data.length;
    if(this.fineDatiDaAnalizzare == max){

    }else {
      if ((this.fineDatiDaAnalizzare + this.tableConfig.pagination.itemPerPage) < max) {
        this.inizioDatiDaAnalizzare = this.inizioDatiDaAnalizzare + this.tableConfig.pagination.itemPerPage;
        this.fineDatiDaAnalizzare = this.fineDatiDaAnalizzare + this.tableConfig.pagination.itemPerPage;
      } else if (!this.fine) {
        this.inizioDatiDaAnalizzare = this.inizioDatiDaAnalizzare + this.tableConfig.pagination.itemPerPage;
        this.fineDatiDaAnalizzare = this.fineDatiDaAnalizzare + this.tableConfig.pagination.itemPerPage;
        this.fine = true;
      }
    }
    console.log(this.tableConfig.pagination.itemPerPage)
    console.log( this.inizioDatiDaAnalizzare + " " + this.fineDatiDaAnalizzare)
  }


  //Visualizza meno elementi all'interno della tabella
  visualizzaMenoElementi = () : void => {
    //let min: number = Math.min.apply(Math, this.tableConfig.pagination.itemPerPageOptions.map(function(o) { return o; }));
    let min: number = this.tableConfig.pagination.itemPerPageOptions[0];
    if(this.inizioDatiDaAnalizzare > min) {
      this.inizioDatiDaAnalizzare = this.inizioDatiDaAnalizzare - this.tableConfig.pagination.itemPerPage;
      this.fineDatiDaAnalizzare = this.fineDatiDaAnalizzare - this.tableConfig.pagination.itemPerPage;
      if(this.fine){this.fine = false;}
    }
    else{
      this.inizioDatiDaAnalizzare = 0;
      this.fineDatiDaAnalizzare = this.tableConfig.pagination.itemPerPage;
    }
  }


  //Filtra i campi della tabella in base alle colonne selezionate ed i dati inseriti
  filtroCampiTabella = () : void => {
    let copiaDati: any[] = [];

    this.tableConfig.search.columns = [];

    var e = document.getElementById("listaDiSelezione");

    // @ts-ignore
    for (var option of e.options) {
      if (option.selected) {
        this.tableConfig.search.columns.push(option.value);
      }
    }

    // @ts-ignore
    let elementiDaCercare: string[] = this.ricercaElemento.split(' ');


    this.data.forEach((elem, index) => {
      let ins: boolean = true;
      this.tableConfig.search.columns.forEach((elementoHeader, n) => {
        if(elem[elementoHeader] != elementiDaCercare[n]){
          ins = false;
        }
      })
      if(ins){ copiaDati.push(elem); }
    })


    this.data = copiaDati;
  }


  //Funzione di sort
  currentOrderDis: boolean = false;
  currentOrderAsc: boolean = false;
  visualizzaFreccia: string = "";

  sortTable = (proprieta: string) : void => {
    let numeroColonna: number = 0;
    let numeroFor: number = 0;

    if(this.tableConfig.order.orderType === "asc"){
      this.data.sort((a: undefined, b: undefined) => {
          // @ts-ignore
          if (a[proprieta] > b[proprieta]) {
            return 1;
          }

          // @ts-ignore
          if (a[proprieta] < b[proprieta]) {
            return -1;
          }
          return 0;

        }
      );
      this.tableConfig.order.orderType = "dis";
      this.currentOrderDis = true;
      this.currentOrderAsc = false;
      this.visualizzaFreccia = proprieta;
    }
    else if (this.tableConfig.order.orderType === "dis"){
      this.data.sort((a: undefined, b: undefined) => {
          // @ts-ignore
          if (a[proprieta] < b[proprieta]) {
            return 1;
          }

          // @ts-ignore
          if (a[proprieta] > b[proprieta]) {
            return -1;
          }
          return 0;

        }
      );
      this.tableConfig.order.orderType = "asc";
      this.currentOrderDis = false;
      this.currentOrderAsc = true;
      this.visualizzaFreccia = proprieta;
    }
    else{
      this.data.sort((a: undefined, b: undefined) => {
          // @ts-ignore
          if (a[proprieta] > b[proprieta]) {
            return 1;
          }

          // @ts-ignore
          if (a[proprieta] < b[proprieta]) {
            return -1;
          }
          return 0;

        }
      );
      this.tableConfig.order.orderType = "dis";
      this.currentOrderDis = true;
      this.currentOrderAsc = false;
      this.visualizzaFreccia = proprieta;
    }
  }

}


/*onChange(newValue: number) {
    let scarto: number = 0;
    if(newValue == this.tableConfig.pagination.itemPerPageOptions[0]){
      this.inizioDatiDaAnalizzare = 0;
      this.fineDatiDaAnalizzare = this.tableConfig.pagination.itemPerPage;
    }
    else if(newValue > this.tableConfig.pagination.itemPerPage){
      if(newValue >= this.fineDatiDaAnalizzare){
        scarto = newValue - this.fineDatiDaAnalizzare;
        console.log(scarto)
      }
      else{
        scarto = this.fineDatiDaAnalizzare - newValue;
      }
      this.tableConfig.pagination.itemPerPage = newValue;
      this.fineDatiDaAnalizzare = this.fineDatiDaAnalizzare + scarto;
    }
    else{
      this.fineDatiDaAnalizzare = this.inizioDatiDaAnalizzare + newValue;
    }
    this.tableConfig.pagination.itemPerPage = newValue;
  }*/
