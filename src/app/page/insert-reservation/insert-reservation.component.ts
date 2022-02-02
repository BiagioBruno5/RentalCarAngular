import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common'
import {MyButtonConfig} from "../../core/button/button.config";
import {MyReservationConfig} from "./reservationConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {GetPrenotazioneMockService} from "../../service/getPrenotazioneService/get-prenotazione-mock.service";
import {LoginService} from "../../service/loginService/login.service";

@Component({
  selector: 'app-insert-reservation',
  templateUrl: './insert-reservation.component.html',
  styleUrls: ['./insert-reservation.component.css']
})
export class InsertReservationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private prenotazioniService: GetPrenotazioneMockService,
    public datepipe: DatePipe,
    private router: Router
  ) { }

  idPrenotazione: number = 0;
  prenotazione: any = {};
  dataInizio: string = "";
  dataFine: string = "";
  salva: boolean = false;
  modifica: boolean = false;


  ngOnInit(): void {

    this.idPrenotazione = this.route.snapshot.params['prenotazioneId'];
    this.prenotazione = this.prenotazioniService.getPrenotazioneById(this.idPrenotazione);

    this.dataInizio = "" + this.datepipe.transform(this.prenotazione.dataInizio, 'yyyy-MM-dd');
    this.dataFine = "" + this.datepipe.transform(this.prenotazione.dataFine, 'yyyy-MM-dd');

    if(this.route.snapshot.params['prenotazioneId']){
      this.salva = true;
    }
    else{
      this.modifica = true;
    }
  }

  @Input()
  reservationConfig: MyReservationConfig = {dataInizio: new Date(), dataFine: new Date(), veicolo: ""};

  public  buttonConfiguratio: MyButtonConfig = {customCssClass: "", text: "Prenota", icon: ""}

  modifiaPrenotazione = () => {
    if(this.route.snapshot.params['prenotazioneId']){
      this.prenotazione.dataInizio = new Date(this.dataInizio).toDateString();
      this.prenotazione.dataFine = new Date(this.dataFine).toDateString();
      this.prenotazioniService.prenotazioneModificationById(this.prenotazione);
      this.router.navigate(['admin/visualizzaPrenotazioni']);
    }
  }

  salvaPrenotazione = () => {
    if(!this.route.snapshot.params['prenotazioneId']) {
      this.prenotazione.numeroPrenotazione = this.prenotazioniService.getNewNumeroPrenotazione();
      this.prenotazione.idUtente = sessionStorage.getItem("idUtente");
      this.prenotazione.dataInizio = new Date(this.dataInizio).toDateString();
      this.prenotazione.dataFine = new Date(this.dataFine).toDateString();
      this.prenotazioniService.salvaPrenotazione(this.prenotazione);
      this.router.navigate(['customer/homePageCustomer']);
    }
  }
}
