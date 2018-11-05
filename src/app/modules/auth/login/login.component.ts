import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { AuthModel } from '../auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private model: AuthModel
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get isLoading(): Observable<boolean> {
    return this.model.isLoading$;
  }

  public loginSubmit(): void {
    this.authService.login(this.formLogin.value.email, this.formLogin.value.password);
  }

  private initForm(): void {
    this.formLogin = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

}
