import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetListaUtentiMockService} from "../../service/getListaUtentiService/get-lista-utenti-mock.service";
import {MyTableConfig} from "../../core/table/table.config";
import {GetParcoVeicoliMockService} from "../../service/getParcoVeicoliService/get-parco-veicoli-mock.service";
import {MyButtonConfig} from "../../core/button/button.config";

@Component({
  selector: 'app-parco-veicoli',
  templateUrl: './parco-veicoli.component.html',
  styleUrls: ['./parco-veicoli.component.css']
})
export class ParcoVeicoliComponent implements OnInit {

  constructor(private router: Router, private getLista: GetParcoVeicoliMockService) { }

  isCustomer: boolean = true;

  public headTable: MyTableConfig = this.getLista.returnHeadTable();

  ngOnInit(): void {
    if(sessionStorage.getItem("nomeUtente") === null){
      this.isCustomer = false;
    }
    else{
      this.headTable = this.getLista.returnHeadTableCustomer();
    }
  }

  public popolazioneDada: any[] = this.getLista.returnData();

  public buttonConfiguration: MyButtonConfig = {customCssClass: "padding: 10px 40px;", text: "ciao", icon: "ciao"};

  handleButton = (obj: any) => {
    let dataDaAnalizzare = obj.datoAna;
    let action = obj.actionAna;

    if(action === "delete"){
      this.getLista.delateVeicleById(dataDaAnalizzare.numeroTelaio);
    }
    else if(action === "edit"){
      this.router.navigate(['admin/modificaVeicolo', dataDaAnalizzare.numeroTelaio]);
    }
  }

  handleAdd = (str: string) =>{
    this.router.navigate(['admin/modificaVeicolo']);
  }
}
