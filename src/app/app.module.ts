import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { DetailComponent } from './ingreso-egreso/detail/detail.component';
import { IngresoEgresoModel } from './ingreso-egreso/ingreso-egreso.model';
import { RegisterComponent } from './auth/register/register.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { environment as ENV } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { AppRountingModule } from './app-routing.module';
import { ApplicationModel } from './application.model';
import { AppComponent } from './app.component';
import { AuthModel } from './auth/auth.model';
import { IngresoEgresoPipe } from './pipes/ingreso-egreso.pipe';
import { rootReducer } from './store/reducers/root.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetailComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IngresoEgresoPipe
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: ENV.production
    }),
    ChartsModule
  ],
  providers: [ ApplicationModel, AuthModel, IngresoEgresoModel ],
  bootstrap: [AppComponent]
})
export class AppModule { }
