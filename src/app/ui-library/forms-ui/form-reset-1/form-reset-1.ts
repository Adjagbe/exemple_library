import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-reset-1', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-reset-1.html', styleUrls: ['./form-reset-1.scss'] })
export class FormReset1 { email=''; sent=false; send() { if(this.email) this.sent=true; } }
