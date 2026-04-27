import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-register-2', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-register-2.html', styleUrls: ['./form-register-2.scss'] })
export class FormRegister2 { fname=''; lname=''; email=''; password=''; role='developer'; roles=['Developer','Designer','Product Manager','Founder']; }
