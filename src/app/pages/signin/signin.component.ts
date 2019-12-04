import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiService } from "../../services/api.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formSignIn = this.formBuilder.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
  }

  handleSubmit() {
    const { email, password } = this.formSignIn.getRawValue();
    const endPoint = "signin";

    this.apiService.signin(endPoint, email, password).subscribe(
      val => {
        this.router.navigate(["/"]);
        return this.userService.setToken(val);
      },
      err => console.log(err)
    );
  }
}
