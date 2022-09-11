import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import Swal from 'sweetalert2';
import { LoginField } from '../model/login-field.model';
import { LoginToken } from '../model/login.model';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginField: typeof LoginField = LoginField;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sessionService: SessionService
  ) { }



  buildForm(): void {
    this.loginForm = new FormGroup({
      [LoginField.EMAIL]: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      [LoginField.PASSWORD]: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
        ]
      )
    })
  }

  ngOnInit(): void {
    this.buildForm();

    if (this.sessionService.get('token')){
      this.router.navigateByUrl('')
    }
  }

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (token: LoginToken) => {
        if (token){
          this.handleLogin(token);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email or password!',
          });
        }
    },
      error: (error: Error) => {}
    });

  }

  private handleLogin(token: LoginToken): void {
    this.activatedRoute.queryParams.pipe(
      map((params: Params) => params['next'] || null))
      .subscribe((next: string | '') => {
        this.router.navigateByUrl(next).finally();
      });
  }

  isValid(loginField: LoginField): string{
    const control: AbstractControl = this.loginForm.get(loginField) as AbstractControl;
    if(control && control.touched && control.invalid){
      return 'is-invalid';
    } else if(control && control.valid){
      return 'is-valid';
    } else {
      return '';
    }
  }

}
