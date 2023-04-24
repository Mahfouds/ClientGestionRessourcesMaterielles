import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  mode: string = 'register'; // Initialisation du mode à 'register'
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.errorMessage = '';
    /*if (this.mode === 'register') {
       this.authService.registerUser(this.user)
       .subscribe(
         (response) => {
           console.log("registration successful !!");
         }
       );
       this.mode = 'authentificate';
     } else {*/
    this.authService.authenticateUser(this.user).subscribe({
      next: (response) => {
        this.authService.setLogin(this.user.login);
        this.authService.setId(response.id);
        this.authService.setRole(response.role);
        this.authService.setToken(response.token);
        this.authService.setIsLoggedIn('true');
        switch (response.role) {
          case 'ENSEIGNANT':
            this.router.navigate(['/departement']);
            break;
          case 'CHEF_DEPARTEMENT':
            this.router.navigate(['/departement']);
            break;
          case 'TECHNICIEN':
            this.router.navigate(['/service-de-maintenance']);
            break;
          default:
            this.router.navigate(['/error']);
            break;
        }
      },
      error: (err) => {
        console.log(err);
        const errorCode = err.status;
        if (errorCode === 403) {
          this.errorMessage = 'Login ou mot de passe incorrect';
          console.log('Login ou mot de passe incorrect');
        }
      },
    });
    //}
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
    });
  }
}
