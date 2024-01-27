import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;  // Definite Assignment Assertion

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validators: this.matchPasswords });
  }

  matchPasswords(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (!password || !confirmPassword) {
      // One of the controls is missing, return null (no error)
      return null;
    }
  
    return password.value === confirmPassword.value ? null : { notMatching: true };
  }

  onSignup() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signup(email, password)
        .then(() => {
          // On successful signup, navigate to the login page
          this.router.navigate(['/login']);
        })
        .catch(error => {
          // Handle any errors here
          console.error('Signup Error:', error);
        });
    }
  }

}
