import { AuthGuard } from './shared/auth.guard';
import { UserResolver } from './shared/user.resolver';
import { LoginComponent } from './login/login.component';
import { ComidaComponent } from './comida/comida.component';
import { DesayunoComponent} from './desayuno/desayuno.component';
import {OrdenesComponent} from './ordenes/ordenes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: 'desayuno', component: DesayunoComponent, resolve: { data: UserResolver } }
  // { path: 'comida', component: ComidaComponent, resolve: { data: UserResolver } },
  // { path: 'ordenes', component: OrdenesComponent, resolve: { data: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
