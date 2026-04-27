import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-register-1', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-register-1.html', styleUrls: ['./form-register-1.scss'] })
export class FormRegister1 { name=''; email=''; password=''; agree=false; showPwd=false; }
