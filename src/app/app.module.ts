import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { UserResolver } from './shared/user.resolver';
import { UserService } from './shared/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
