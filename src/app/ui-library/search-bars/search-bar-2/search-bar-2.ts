import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-search-bar-2', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './search-bar-2.html', styleUrls: ['./search-bar-2.scss'] })
export class SearchBar2 {
  query = '';
  recents = ['Deploy to production','Run database migration','View error logs'];
  get show() { return this.query.length === 0; }
}
