import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-profile-card-1', standalone: true, imports: [CommonModule], templateUrl: './profile-card-1.html', styleUrls: ['./profile-card-1.scss'] })
export class ProfileCard1 {
  user = { name:'Sarah Chen', role:'Senior Product Designer', company:'Vertiblock Inc.', avatar:'SC', followers:4200, following:310, posts:87 };
  skills = ['Figma','UX Research','Design Systems','Prototyping'];
}
