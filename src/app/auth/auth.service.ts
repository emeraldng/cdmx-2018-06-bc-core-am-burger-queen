import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
// import { of } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if ( user ) {
       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
       return ;
      }
    }));
  }
}
