import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "client";
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.http.get("https://localhost:5001/users").subscribe(
      (res) => {
        this.users = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}