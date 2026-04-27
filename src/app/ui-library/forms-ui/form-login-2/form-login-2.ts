import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-login-2', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-login-2.html', styleUrls: ['./form-login-2.scss'] })
export class FormLogin2 {
  email = ''; password = ''; remember = false; showPwd = false;
  socials = [
    { label: 'Google', icon: 'G' },
    { label: 'GitHub', icon: '⌥' },
  ];
}
