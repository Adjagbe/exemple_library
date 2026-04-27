import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-profile-card-2', standalone: true, imports: [CommonModule], templateUrl: './profile-card-2.html', styleUrls: ['./profile-card-2.scss'] })
export class ProfileCard2 {
  user = { name:'Alex Rivera', role:'Full-Stack Engineer', avatar:'AR', bio:'Building scalable systems at the intersection of performance and elegance.' };
  links = [{ icon:'🐦', label:'Twitter' },{ icon:'💼', label:'LinkedIn' },{ icon:'🐙', label:'GitHub' }];
}
