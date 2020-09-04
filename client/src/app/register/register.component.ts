import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';

import { commonAnimations } from 'src/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
    });

    this.registerForm.get('password').valueChanges.subscribe(() => {
      this.registerForm.get('passwordConfirm').updateValueAndValidity();
    });
  }

  register(): void {
    const { email, name, password } = this.registerForm.value;

    this._auth.register({ email, name, password }).subscribe(
      () => {
        this._router.navigateByUrl('/ui/page-layouts/simple/right-sidebar-3');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

/**
 * Confirm password validator
 */
export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};
