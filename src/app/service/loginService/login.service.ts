import { Injectable } from '@angular/core';
import {GetListaUtentiMockService} from "../getListaUtentiService/get-lista-utenti-mock.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  listaUtenti: GetListaUtentiMockService) { }

  utenti: object[] = [{userId: "ADMIN", password: "ADMIN"},
    {userId: "CUSTOMER", password: "CUSTOMER"}];

  loggato: boolean = false;

  isAdmin: boolean = false;

  isCustomer: boolean = false;

  effettuaAutenticazione = (nomeUser: string, passwordUser: string) =>{
    let utente: any = {};
    utente = this.listaUtenti.getUserByNameAndPassword(nomeUser, passwordUser);
      // @ts-ignore
      if(Object.keys(utente).length === 0){
      }
      else {
        // @ts-ignore
        if(utente.nome === "ADMIN"){
          this.isAdmin = true;
          this.loggato = true;
        }
        else {
          this.isCustomer = true;
          this.loggato = true;
          sessionStorage.setItem("idUtente", utente.id);
          sessionStorage.setItem("nomeUtente", utente.nome);
        }
      }

    return this.loggato;
  }

  isLoggato = () =>{
    if(this.loggato){
      return true;
    }
    else {
      return false;
    }
  }

  isAdminLog = () =>{
    if(this.isAdmin){
      return true;
    }
    else {
      return false;
    }
  }

  isCustomerLog = () =>{
    if(this.isCustomer){
      return true;
    }
    else {
      return false;
    }
  }

  setIsAdminFalse = () =>{
    this.isAdmin = false;
  }

  setIsCustomerFalse = () =>{
    this.isCustomer = false;
  }

  setIsLoggatoFalse = () =>{
    this.loggato = false;
  }
}
