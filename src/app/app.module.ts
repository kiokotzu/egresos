import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { NgModule, InjectionToken } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import { IngresoEgresoModel } from './modules/ingreso-egreso/ingreso-egreso.model';
import { INITIAL_APPLICATION_STATE } from './core/store/state/application.state';
import { environment as ENV } from '../environments/environment';
import { rootReducer } from './core/store/reducers/root.reducer';
import { AppRountingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApplicationModel } from './application.model';
import { AppComponent } from './app.component';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    AuthModule,
    FormsModule,
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: ENV.production
    })
  ],
  providers: [
    ApplicationModel,
    IngresoEgresoModel,
    {
      provide: INITIAL_STATE,
      useValue: INITIAL_APPLICATION_STATE
    },
    {
      provide: REDUCER_TOKEN,
      useValue: rootReducer
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
