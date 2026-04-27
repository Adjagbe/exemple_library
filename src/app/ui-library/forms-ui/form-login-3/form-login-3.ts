import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-login-3', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-login-3.html', styleUrls: ['./form-login-3.scss'] })
export class FormLogin3 { email=''; password=''; showPwd=false; }
