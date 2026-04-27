import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-login-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login-1.html',
  styleUrls: ['./form-login-1.scss'],
})
export class FormLogin1 {
  email = '';
  password = '';
  showPwd = false;
  loading = false;
  submit() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1500);
  }
}
