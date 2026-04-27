import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-form-reset-2', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './form-reset-2.html', styleUrls: ['./form-reset-2.scss'] })
export class FormReset2 { password=''; confirm=''; done=false; showP=false; showC=false;
  get match() { return this.confirm === '' || this.password === this.confirm; }
  submit() { if(this.password && this.match) this.done = true; }
}
