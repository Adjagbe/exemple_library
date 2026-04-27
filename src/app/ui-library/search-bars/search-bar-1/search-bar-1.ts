import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-search-bar-1', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './search-bar-1.html', styleUrls: ['./search-bar-1.scss'] })
export class SearchBar1 {
  query = '';
  all = ['Dashboard Overview','Analytics Reports','User Management','Product Catalog','Order History','Invoice Generator','API Settings','Billing & Plans'];
  get filtered() { return this.query.length > 1 ? this.all.filter(i => i.toLowerCase().includes(this.query.toLowerCase())) : []; }
  pick(v: string) { this.query = v; }
}
