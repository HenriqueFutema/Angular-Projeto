import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formSignUp = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      userName: ["", Validators.required],
      password: ["", Validators.required],
      gender: ["masculino"]
    });
  }

  handleSubmit() {
    const {
      name,
      email,
      userName,
      password,
      gender
    } = this.formSignUp.getRawValue();

    this.apiService.signup(name, email, userName, password, gender).subscribe(
      val => {
        console.log(val);
        this.formSignUp.reset();
        return this.router.navigate(["user/signin"]);
      },
      err => console.log(err)
    );
  }
}
