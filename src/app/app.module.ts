import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { environment as ENV } from '../environments/environment';
import { rootReducer } from './core/store/reducers/root.reducer';
import { AppRountingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApplicationModel } from './application.model';
import { AppComponent } from './app.component';
import { IngresoEgresoModel } from './modules/ingreso-egreso/ingreso-egreso.model';

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
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: ENV.production
    })
  ],
  providers: [ ApplicationModel, IngresoEgresoModel ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
