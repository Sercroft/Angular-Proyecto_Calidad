import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';

const routes: Routes = [
  { path: '', redirectTo: '/pasajeros', pathMatch: 'full' },
  { path: 'pasajeros', component: PasajerosComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
