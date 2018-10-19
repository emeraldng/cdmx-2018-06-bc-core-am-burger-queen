import { AuthGuard } from './shared/auth.guard'; 
import { UserResolver } from './shared/user.resolver'; 
import { MenuDisplayComponent } from './menu-display/menu-display.component';

import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// R U T A S
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'menu-display', component: MenuDisplayComponent, resolve: { data: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}