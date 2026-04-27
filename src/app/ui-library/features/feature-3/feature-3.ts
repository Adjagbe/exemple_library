import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-feature-3', standalone: true, imports: [CommonModule], templateUrl: './feature-3.html', styleUrls: ['./feature-3.scss'] })
export class Feature3 {
  features = [
    { icon:'🚀', label:'Deploy', title:'One-click Deploy', badge:'New', desc:'Push to Git, live in seconds.', accent:'#6366f1' },
    { icon:'🛡️', label:'Secure', title:'Zero-trust Security', badge:'', desc:'Per-request auth and mTLS.', accent:'#10b981' },
    { icon:'📈', label:'Scale', title:'Infinite Scale', badge:'', desc:'From 0 to 1M reqs/sec.', accent:'#f59e0b' },
    { icon:'🤖', label:'AI', title:'AI Co-pilot', badge:'Beta', desc:'Smart code & review assistant.', accent:'#ec4899' },
  ];
}
