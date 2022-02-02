import {Component, OnInit, ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common'
import {MyButtonConfig} from "../../core/button/button.config";
import {ActivatedRoute, Router} from "@angular/router";
import {GetListaUtentiMockService} from "../../service/getListaUtentiService/get-lista-utenti-mock.service";

@Component({
  selector: 'app-insert-customer',
  templateUrl: './insert-customer.component.html',
  styleUrls: ['./insert-customer.component.css']
})
export class InsertCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getUtentiService: GetListaUtentiMockService, public datepipe: DatePipe, private router: Router) { }

  idUtente: number = 0;
  utente: any = {};

  nomeUtente: string = "";
  cognomeUtente: string = "";
  dataUtenteNascita: Date = new Date();
  dataUtente: string = "";

  isAdmin: boolean = true;

  ngOnInit(): void {
    this.idUtente = this.route.snapshot.params['userId'];
    this.utente = this.getUtentiService.getUserById(this.idUtente);
    this.nomeUtente = this.utente.nome;
    this.cognomeUtente = this.utente.cognome;
    this.dataUtenteNascita = this.utente.dataNascita;
    this.dataUtente = "" + this.datepipe.transform(this.dataUtenteNascita, 'yyyy-MM-dd');

    if(this.route.snapshot.params['userId']){
      this.isAdmin = false;
    }
    else{
      this.isAdmin = true;
    }
  }

  public buttonConfiguration: MyButtonConfig = {customCssClass: "width: 100px; height: 45px;", text: "Salva", icon: ""};

  modificaUtente = () => {
      this.getUtentiService.userModificationViaId(
        this.utente.id,
        this.nomeUtente,
        this.cognomeUtente,
        this.dataUtenteNascita
      );
  }

  salvaUtente = () => {
    if(!this.route.snapshot.params['userId']){
      let utente: any = {};

      utente.id = this.getUtentiService.getNewId();
      utente.nome = this.nomeUtente;
      utente.cognome = this.cognomeUtente;
      utente.dataNascita = this.dataUtenteNascita;
      this.getUtentiService.salvaUtente(utente);
      this.router.navigate(['admin']);
    }
  }

}
