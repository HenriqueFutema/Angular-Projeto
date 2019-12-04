import { Component, OnInit } from "@angular/core";

import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  user$: Observable<any>;
  userName: String;

  constructor(private userService: UserService) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {
    this.userName = this.userService.getUserName();
  }
}
