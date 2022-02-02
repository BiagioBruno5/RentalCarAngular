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
export class GetParcoVeicoliMockService {

  constructor(private router: Router) { }

  public header: MyHeaders[] = [
    {key: "numeroTelaio", label: "Numero Telaio"},
    {key: "casaCostruttrice", label: "Casa Costruttrice"},
    {key: "modello", label: "Modello"},
    {key: "tipologia", label: "Tipologia"},
  ];

  public order: MyOrder = {defaultColumn: 0, orderType: ""};

  public search: MySearch = {columns: []};

  public paginazione: MyPagination = {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20]};

  public actions: MyTableActionEnum[] = [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE];

  public headTable: MyTableConfig = {headers: this.header, order: this.order, search: this.search, pagination: this.paginazione, actions: this.actions};

  public popolazioneDada: any[] = [
    {numeroTelaio: 111111, casaCostruttrice: 'FIAT', modello:'PANDA', tipologia: 'AUTO'},
    {numeroTelaio: 222222, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
    {numeroTelaio: 333333, casaCostruttrice: 'FIAT', modello:'PANDA', tipologia: 'AUTO'},
    {numeroTelaio: 444444, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
    {numeroTelaio: 555555, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
    {numeroTelaio: 666666, casaCostruttrice: 'FIAT', modello:'PANDA', tipologia: 'AUTO'},
    {numeroTelaio: 777777, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
    {numeroTelaio: 888888, casaCostruttrice: 'FIAT', modello:'DUCATO', tipologia: 'FURGONE'},
    {numeroTelaio: 999999, casaCostruttrice: 'FIAT', modello:'DUCATO', tipologia: 'FURGONE'},
    {numeroTelaio: 123456, casaCostruttrice: 'FIAT', modello:'DUCATO', tipologia: 'FURGONE'},
    {numeroTelaio: 234234, casaCostruttrice: 'FIAT', modello:'DUCATO', tipologia: 'FURGONE'},
    {numeroTelaio: 452323, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
    {numeroTelaio: 543432, casaCostruttrice: 'FIAT', modello:'DUCATO', tipologia: 'FURGONE'},
    {numeroTelaio: 897564, casaCostruttrice: 'TESLA', modello:'MODEL S', tipologia: 'AUTO'},
  ];

  returnHeadTable = () =>{
    return this.headTable;
  }

  returnHeadTableCustomer = () =>{
  this.headTable = {headers: this.header, order: this.order, search: this.search, pagination: this.paginazione, actions: []};

    return this.headTable;
  }

  returnData = () =>{
    return this.popolazioneDada;
  }

  getVeicleById = (idVeicle: number) => {
    let veicolo: any = {};
    this.popolazioneDada.forEach((element) => {
      if(element.numeroTelaio == idVeicle){
        veicolo = element;
      }
    });
    return veicolo;
  }

  veicleModificationById = (veicolo: any) => {
    this.popolazioneDada.forEach((element) => {
      if(veicolo.numeroTelaio == element.numeroTelaio){
        element.casaCostruttrice = veicolo.casaCostruttrice;
        element.modello = veicolo.modello;
        element.tipologia = veicolo.tipologia;
      }
    });
  }

  saveVeicle = (veicolo: any) => {
    this.popolazioneDada.push(veicolo);
  }

  delateVeicleById = (idVeicle: number) => {
    this.popolazioneDada.forEach((element, index) => {
      if(element.numeroTelaio == idVeicle){
        this.popolazioneDada.splice(index, 1);
      }
    });
  }
}
