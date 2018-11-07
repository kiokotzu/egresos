import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

import { AuthModel } from '../../modules/auth/auth.model';
import { User } from '../../modules/auth/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubcription: Subscription = new Subscription();
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFirestore,
    private model: AuthModel
  ) { }

  public initAuthListener(): void {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!isNullOrUndefined(user)) {
        this.userSubcription = this.afDB.doc(`${user.uid}/user`).valueChanges().subscribe((value: User) => {
          const userObject = new User(value);
          this.model.fetchSetUser(userObject);
          this.user = userObject;
        });
      } else {
        this.user = null;
        this.userSubcription.unsubscribe();
      }
    });
  }

  public createUser(name: string, email: string, password: string) {

    this.model.fetchActiveLoading();

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( data => {

        const user: User = {
          uid: data.user.uid,
          name: name,
          email: data.user.email
        };

        this.afDB.doc(`${ user.uid }/user`)
          .set(user)
          .then(() => {
            this.router.navigate(['/']);
            this.model.fetchDeactiveLoading();
          });

      })
      .catch( err => this.model.fetchDeactiveLoading());
  }

  public login(email: string, password: string) {
    this.model.fetchActiveLoading();
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( data => {
        this.router.navigate(['/dashboard']);
        this.model.fetchDeactiveLoading();
      })
      .catch( err => this.model.fetchDeactiveLoading());
  }

  public logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
    this.model.unSetUser();
  }

  public isAuth(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map(user => {
          if (isNullOrUndefined(user)) {
            this.router.navigate(['/login']);
          }
          return !isNullOrUndefined(user);
        })
      );
  }

  public loginAuth(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map(user => {
          if (!isNullOrUndefined(user)) {
            this.router.navigate(['/']);
          }
          return isNullOrUndefined(user);
        })
      );
  }

  public getUser(): User {
    return {...this.user};
  }

}
