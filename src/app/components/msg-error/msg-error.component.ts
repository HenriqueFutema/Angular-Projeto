import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-msg-error",
  templateUrl: "./msg-error.component.html",
  styleUrls: ["./msg-error.component.css"]
})
export class MsgErrorComponent implements OnInit {
  @Input() msg: String;

  constructor() {}

  ngOnInit() {}
}
