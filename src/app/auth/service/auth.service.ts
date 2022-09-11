import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Observer } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { Login, LoginToken } from '../model/login.model';

const AUTH_KEY = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly sessionService: SessionService) { }
    
    login(payload: Login): Observable<LoginToken>{
      return new Observable<LoginToken> ((observer: Observer<LoginToken>)=>{
        try {
          const { email, password } = payload;
          if(email === 'admin@gmail.com' && password === 'apaansi?'){
              const token: LoginToken = { token: '12345'};
              this.sessionService.set(AUTH_KEY, JSON.stringify(token));
              observer.next(token);
          }
        } catch (error) {
          observer.error(error);
        }
        observer.complete();
      });

    }
}
