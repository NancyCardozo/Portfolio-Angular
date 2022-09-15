import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { TableroAdmComponent } from './tableroadm/tableroadm.component';
import { IntroComponent } from './intro/intro.component';



const routes: Routes = [
  {path: 'intro', component:IntroComponent},
  {path: 'tableroadm', component:TableroAdmComponent},
  {path:'', redirectTo:'/intro', pathMatch: 'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
