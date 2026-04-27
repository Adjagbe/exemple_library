import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-breadcrumb-2', standalone: true, imports: [CommonModule], templateUrl: './breadcrumb-2.html', styleUrls: ['./breadcrumb-2.scss'] })
export class Breadcrumb2 {
  crumbs = [{ label:'Home', icon:'🏠' }, { label:'Projects', icon:'📁' }, { label:'Nova App', icon:'⚡' }, { label:'Analytics', icon:'📊' }];
}
