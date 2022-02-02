import { Component, OnInit } from '@angular/core';
import {GetListaUtentiMockService} from "../../service/getListaUtentiService/get-lista-utenti-mock.service";
import {MyButtonConfig} from "../../core/button/button.config";
import {MyTableConfig} from "../../core/table/table.config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page-admin',
  templateUrl: './home-page-admin.component.html',
  styleUrls: ['./home-page-admin.component.css']
})
export class HomePageAdminComponent implements OnInit {

  constructor(private getLista: GetListaUtentiMockService, private router: Router) { }

  ngOnInit(): void {
  }

  public buttonConfiguration: MyButtonConfig = {customCssClass: "padding: 10px 40px;", text: "ciao", icon: "ciao"};

  public headTable: MyTableConfig = this.getLista.returnHeadTable();

  public popolazioneDada: any[] = this.getLista.returnData();

  handleButton = (obj: any) => {
    let dataDaAnalizzare = obj.datoAna;
    let action = obj.actionAna;

    if(action === "delete"){
      this.getLista.delateUserById(dataDaAnalizzare.id);
      this.router.navigate(['admin']);
    }
    else if(action === "edit"){
      this.router.navigate(['admin/modificaUtente', dataDaAnalizzare.id]);
    }
    else if(action === "show"){
      this.router.navigate(['admin/visualizzaPrenotazioni', dataDaAnalizzare.id]);
    }

  }

  handleAdd = (cod: string) => {
    this.router.navigate(['admin/inserisciCustomer']);
  }
}
