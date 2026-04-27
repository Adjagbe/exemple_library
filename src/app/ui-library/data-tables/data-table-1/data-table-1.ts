import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-data-table-1', standalone: true, imports: [CommonModule], templateUrl: './data-table-1.html', styleUrls: ['./data-table-1.scss'] })
export class DataTable1 {
  rows = [
    { name:'Lena Fischer', email:'lena@vertiblock.io', role:'Admin', status:'Active', joined:'Jan 12, 2024' },
    { name:'Marcus Hill', email:'m.hill@nomads.dev', role:'Editor', status:'Active', joined:'Feb 3, 2024' },
    { name:'Yuki Tanaka', email:'yuki@lunarise.co', role:'Viewer', status:'Inactive', joined:'Mar 8, 2024' },
    { name:'Omar Hassan', email:'omar@fintek.com', role:'Editor', status:'Active', joined:'Apr 1, 2024' },
    { name:'Emma Johansson', email:'emma@strati.io', role:'Admin', status:'Pending', joined:'May 15, 2024' },
  ];
}
