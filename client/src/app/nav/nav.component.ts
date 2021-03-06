import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User>;
  constructor(
    public accountService: AccountService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe((res) => {
      this.route.navigateByUrl("/members");
    });
  }

  logout() {
    this.accountService.logout();
    this.route.navigateByUrl("/");
  }
}
