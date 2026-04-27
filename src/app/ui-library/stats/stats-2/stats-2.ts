import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-stats-2', standalone: true, imports: [CommonModule], templateUrl: './stats-2.html', styleUrls: ['./stats-2.scss'] })
export class Stats2 {
  stats = [
    { value:'$2.4B', label:'Revenue processed', trend:'+12%' },
    { value:'150+', label:'Countries supported', trend:'+8 new' },
    { value:'4.9★', label:'App store rating', trend:'+0.1' },
    { value:'24/7', label:'Support coverage', trend:'365 days' },
  ];
}
