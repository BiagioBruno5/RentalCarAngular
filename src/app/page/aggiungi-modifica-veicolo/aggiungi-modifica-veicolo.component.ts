import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetParcoVeicoliMockService} from "../../service/getParcoVeicoliService/get-parco-veicoli-mock.service";
import {MyButtonConfig} from "../../core/button/button.config";

@Component({
  selector: 'app-aggiungi-modifica-veicolo',
  templateUrl: './aggiungi-modifica-veicolo.component.html',
  styleUrls: ['./aggiungi-modifica-veicolo.component.css']
})
export class AggiungiModificaVeicoloComponent implements OnInit {

  constructor(private route: ActivatedRoute, private veicoliService: GetParcoVeicoliMockService, private router: Router) { }

  idVeicolo: number = 0;
  veicolo: any = {};

  modifica: boolean = false;
  aggiunta: boolean = false;

  ngOnInit(): void {
    this.idVeicolo = this.route.snapshot.params['veicleId'];
    if(this.route.snapshot.params['veicleId']) {
      this.veicolo = this.veicoliService.getVeicleById(this.idVeicolo);
      this.modifica = true;
    }
    else{
      this.aggiunta = true;
    }
  }
  public buttonConfiguration: MyButtonConfig = {customCssClass: "width: 100px; height: 45px;", text: "Salva", icon: ""};

  modificaVeicolo = () => {
    if(this.route.snapshot.params['veicleId']){
      this.veicoliService.veicleModificationById(this.veicolo);
      this.router.navigate(['admin/parcoVeicoli']);
    }
  }

  salvaVeicolo = () => {
    if(!this.route.snapshot.params['veicleId']){
      this.veicoliService.saveVeicle(this.veicolo);
      this.router.navigate(['admin/parcoVeicoli']);
    }
  }

}
