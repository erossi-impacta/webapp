import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = true;

  constructor() {}

  public autenticateUser(username: string, password:string){
    if (username === 'Admin' && password === 'senha123'){
      this.isLoggedIn = true;
    }
  }
}
