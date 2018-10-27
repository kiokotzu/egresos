import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { AuthModel } from '../auth.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private model: AuthModel
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get isLoading$(): Observable<boolean> {
    return this.model.isLoading$;
  }

  public forSubmit(): void {
    this.authService.createUser(this.formRegister.value.name,
                                this.formRegister.value.email,
                                this.formRegister.value.password);
  }

  private initForm(): void {
    this.formRegister = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

}
