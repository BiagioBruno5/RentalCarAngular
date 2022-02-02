import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetPrenotazioneMockService} from "../../service/getPrenotazioneService/get-prenotazione-mock.service";
import {MyTableConfig} from "../../core/table/table.config";

@Component({
  selector: 'app-home-page-customer',
  templateUrl: './home-page-customer.component.html',
  styleUrls: ['./home-page-customer.component.css']
})
export class HomePageCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private getLista: GetPrenotazioneMockService) { }

  idUtente: number = 0;
  public popolazioneDada: any[] = [];

  ngOnInit(): void {
    // @ts-ignore
    this.idUtente = parseInt(sessionStorage.getItem("idUtente"));
    this.popolazioneDada = this.getLista.getDataByIdUtente(this.idUtente);
  }

  public headTable: MyTableConfig = this.getLista.returnHeadTable();

  handleButton = (obj: any) => {
    let dataDaAnalizzare = obj.datoAna;
    let action = obj.actionAna;

    if(action === "delete"){
      this.getLista.eliminaPrenotazioneById(dataDaAnalizzare.numeroPrenotazione);
      if(this.idUtente){
        this.popolazioneDada = this.getLista.getDataByIdUtente(this.idUtente);
      }
    }
    else if(action === "edit"){
      this.router.navigate(['admin/modificaPrenotazioni', dataDaAnalizzare.numeroPrenotazione]);
    }
  }

  handleAddCliente = (str: string) =>{

  }
}
