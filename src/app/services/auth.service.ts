import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);
  constructor(private auth : Auth) { }

  login(username: string, password: string){
   return from(signInWithEmailAndPassword(this.auth, username, password))
  }
  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout(){
    return from(this.auth.signOut());
  }


 
}
