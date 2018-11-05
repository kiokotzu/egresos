import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthModel } from '../../auth/auth.model';
import { User } from '../../auth/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private model: AuthModel) { }

  get dataUser$(): Observable<User> {
    return this.model.user$;
  }

}
