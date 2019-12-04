import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "./token.service";
import * as jtw_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify("aaa");
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUser() {
    console.log(this.userSubject.asObservable());

    return this.userSubject.asObservable();
  }

  setToken(val) {
    const token = val.token;
    localStorage.setItem("name", val.user.userName);
    this.decodeAndNotify(val.user);
    this.tokenService.setToken(token);
  }

  private decodeAndNotify(user) {
    this.userName = localStorage.getItem("name");
    this.userSubject.next(user);
  }

  getUserName() {
    return this.userName;
  }

  logout() {
    this.userName = "";
    this.userSubject.next(null);

    return this.tokenService.removeToken();
  }
}
