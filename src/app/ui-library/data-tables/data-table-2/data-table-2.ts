import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-data-table-2', standalone: true, imports: [CommonModule], templateUrl: './data-table-2.html', styleUrls: ['./data-table-2.scss'] })
export class DataTable2 {
  orders = [
    { id:'#4521', customer:'Lena Fischer', amount:'$149.00', status:'Shipped', date:'Jun 1' },
    { id:'#4520', customer:'Marcus Hill', amount:'$89.00', status:'Delivered', date:'May 30' },
    { id:'#4519', customer:'Yuki Tanaka', amount:'$249.00', status:'Processing', date:'May 29' },
    { id:'#4518', customer:'Omar Hassan', amount:'$59.00', status:'Delivered', date:'May 28' },
    { id:'#4517', customer:'Emma J.', amount:'$319.00', status:'Refunded', date:'May 27' },
  ];
}
