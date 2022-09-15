import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercademiComponent } from './acercademi/acercademi.component';

import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesTecnicasComponent } from './habilidades-tecnicas/habilidades-tecnicas.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { TabAdmPerfilComponent } from './modales/tab-adm-perfil/tab-adm-perfil.component';
import { TabAdmImagenFyapComponent } from './modales/tab-adm-imagen-fyap/tab-adm-imagen-fyap.component';
import { TabAdmEducacionComponent } from './modales/tab-adm-educacion/tab-adm-educacion.component';
import { TabAdmExplaboralComponent } from './modales/tab-adm-explaboral/tab-adm-explaboral.component';
import { TabAdmHabilidadesComponent } from './modales/tab-adm-habilidades/tab-adm-habilidades.component';
import { TabAdmProyectosComponent } from './modales/tab-adm-proyectos/tab-adm-proyectos.component';
import { TabAdmContactosComponent } from './modales/tab-adm-contactos/tab-adm-contactos.component';
import { TabAdmFooterComponent } from './modales/tab-adm-footer/tab-adm-footer.component';
import { TableroAdmComponent } from './tableroadm/tableroadm.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercademiComponent,
  
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesTecnicasComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    TabAdmPerfilComponent,
    TabAdmImagenFyapComponent,
    TabAdmEducacionComponent,
    TabAdmExplaboralComponent,
    TabAdmHabilidadesComponent,
    TabAdmProyectosComponent,
    TabAdmContactosComponent,
    TabAdmFooterComponent,
    TableroAdmComponent,
    ErrorComponent,
    IntroComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
