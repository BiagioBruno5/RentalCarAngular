import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../service/loginService/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userId: string = "";

  password: string = "";

  autenticato: boolean = true;

  errMsg: string = "L'email o la password non sono corretti";


  effettuaLogin = () => {
    if(!this.serviceLogin.effettuaAutenticazione(this.userId, this.password)){
      this.autenticato = false;
    }
    else if(this.serviceLogin.isAdminLog()){
      this.router.navigate(['admin']);
    }else if(!this.serviceLogin.isAdminLog()){
      this.router.navigate(['customer']);
    }
  }

}
