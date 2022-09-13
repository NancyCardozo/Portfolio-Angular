import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';

import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesTecnicasComponent } from './habilidades-tecnicas/habilidades-tecnicas.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercaDeMiComponent,
  
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesTecnicasComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
