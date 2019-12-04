import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = "http://localhost:3333/";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  signin(endPoint: String, email: String, password: String) {
    return this.http.post(`${API_URL}${endPoint}`, { email, password });
  }

  signup(
    name: String,
    email: String,
    userName: String,
    password: String,
    gender: String
  ) {
    const user = { name, email, userName, password, gender };

    return this.http.post(`${API_URL}signup`, user);
  }
}
