import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  login(email: string, password: string) {
    // console.log(this.firebaseAuth.authState)
    // this.firebaseAuth.authState.subscribe(user => {
    //   console.log(user);
    //   if (user) {
    //     this.router.navigate(['/tabs']);
    //   }
    // });
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/tabs']);
        console.log('Nice, it worked!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
}
