import { Injectable } from "@angular/core";

const KEY = "authKey";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  setToken(token) {
    return localStorage.setItem(KEY, token);
  }

  getToken() {
    return localStorage.getItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }

  removeToken() {
    localStorage.removeItem("name");
    return localStorage.removeItem(KEY);
  }
}
