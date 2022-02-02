import { Component, OnInit } from '@angular/core';
import {MyTableConfig} from "../../core/table/table.config";
import {ActivatedRoute, Router} from "@angular/router";
import {GetListaUtentiMockService} from "../../service/getListaUtentiService/get-lista-utenti-mock.service";
import {GetPrenotazioneMockService} from "../../service/getPrenotazioneService/get-prenotazione-mock.service";

@Component({
  selector: 'app-visualizza-prenotazioni',
  templateUrl: './visualizza-prenotazioni.component.html',
  styleUrls: ['./visualizza-prenotazioni.component.css']
})
export class VisualizzaPrenotazioniComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private getLista: GetPrenotazioneMockService) { }

  idUtente: number = 0;

  public popolazioneDada: any[] = [];

  ngOnInit(): void {
    this.idUtente = this.route.snapshot.params['userId'];

    if(this.idUtente){
      this.popolazioneDada = this.getLista.getDataByIdUtente(this.idUtente);
    }
    else{
    this.popolazioneDada = this.getLista.returnData();
    }
  }

  public headTable: MyTableConfig = this.getLista.returnHeadTable();

  handleButton = (obj: any) => {
    let dataDaAnalizzare = obj.datoAna;
    let action = obj.actionAna

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

