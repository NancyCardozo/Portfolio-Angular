import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

import { TableroAdmComponent } from './tableroadm/tableroadm.component';
import { ErrorComponent } from './error/error.component';





const routes: Routes = [
   {path: '', component:IntroComponent},
  {path: 'tableroadm', component:TableroAdmComponent},
   {path:'**',component:ErrorComponent}
 ];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
 })
 export class AppRoutingModule { }
