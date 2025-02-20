import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authenticate/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private router : Router, private authService : AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/home/questions']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

}
