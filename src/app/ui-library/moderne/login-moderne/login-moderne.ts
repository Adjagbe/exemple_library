import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-moderne',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-moderne.html',
  styleUrls: ['./login-moderne.scss']
})
export class LoginModerne {
  username = 'TechTree';
  password = '••••••••••';

  onSubmit() {
    console.log('Sign in:', this.username);
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }

  loginWithGithub() {
    console.log('Login with GitHub');
  }
}
