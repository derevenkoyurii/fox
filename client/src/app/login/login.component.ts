import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { commonAnimations } from 'src/common';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _auth: AuthenticationService
  ) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   *
   */
  login(): void {
    this._auth.login(this.loginForm.value).subscribe(
      () => {
        this._router.navigateByUrl('/apps/todo/all');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
