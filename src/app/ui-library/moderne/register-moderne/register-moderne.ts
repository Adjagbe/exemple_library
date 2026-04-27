import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-moderne',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-moderne.html',
  styleUrls: ['./register-moderne.scss']
})
export class RegisterModerne {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    console.log('Register:', this.email);
  }

  registerWithGoogle() {
    console.log('Register with Google');
  }

  registerWithGithub() {
    console.log('Register with GitHub');
  }
}
