import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-breadcrumb-1', standalone: true, imports: [CommonModule], templateUrl: './breadcrumb-1.html', styleUrls: ['./breadcrumb-1.scss'] })
export class Breadcrumb1 {
  crumbs = ['Home','Dashboard','Settings','Profile'];
}
