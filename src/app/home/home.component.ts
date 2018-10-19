

import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hide = true;

  @Input()
  id: string;
  errorMessage: string;
  loginForm: FormGroup;
  email;

 
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'Debes de ingresar un correo válido.'
      : this.email.hasError('email')
        ? 'No es un correo valido.'
        : '';
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        this.router.navigate(['/menu-display']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
