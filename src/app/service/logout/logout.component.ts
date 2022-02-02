import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../loginService/login.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private loginServices: LoginService) { }

  ngOnInit(): void {
    if(this.isInSessiono() === false){
      this.loginServices.setIsAdminFalse();
      this.loginServices.setIsCustomerFalse();
      this.loginServices.setIsLoggatoFalse();
      this.router.navigate(['login']);
    }
    else{
      sessionStorage.removeItem("nomeUtente");
      sessionStorage.removeItem("idUtente");
      this.loginServices.setIsAdminFalse();
      this.loginServices.setIsCustomerFalse();
      this.loginServices.setIsLoggatoFalse();
      this.router.navigate(['login']);
    }
  }

  isInSessiono = () : boolean => (sessionStorage.getItem("nomeUtente")) ? true : false;

}
