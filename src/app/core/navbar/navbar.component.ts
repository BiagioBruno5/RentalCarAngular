import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/loginService/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serviceLogin: LoginService) { }

  ngOnInit(): void {
    this.isAdmin = this.serviceLogin.isAdminLog();
  }

  isAdmin: boolean = false;

}
