import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { User } from '../auth/user.model';
import { AppState } from '../store/recuders/app.reducer';
import { ActiveLoadingAction, DeactiveLoadingAction } from '../store/actions/ui.acctions';
import { SetUserAction } from '../store/actions/auth.action';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubcription: Subscription = new Subscription();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFirestore,
    private store: Store<AppState>
  ) { }

  public initAuthListener(): void {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!isNullOrUndefined(user)) {
        this.userSubcription = this.afDB.doc(`${user.uid}/user`).valueChanges().subscribe((value: User) => {
          const userObject = new User(value);
          this.store.dispatch(new SetUserAction(userObject));
        });
      } else {
        this.userSubcription.unsubscribe();
      }
    });
  }

  public createUser(name: string, email: string, password: string) {

    this.store.dispatch(new ActiveLoadingAction());

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
            this.store.dispatch(new DeactiveLoadingAction());
          });

      })
      .catch( err => this.store.dispatch(new DeactiveLoadingAction()));
  }

  public login(email: string, password: string) {
    this.store.dispatch(new ActiveLoadingAction());
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( data => {
        console.log(data);
        this.router.navigate(['/dashboard']);
        this.store.dispatch(new DeactiveLoadingAction());
      })
      .catch( err => this.store.dispatch(new DeactiveLoadingAction()));
  }

  public logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
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

}
