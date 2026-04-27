import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-upload-2', standalone: true, imports: [CommonModule], templateUrl: './upload-2.html', styleUrls: ['./upload-2.scss'] })
export class Upload2 {
  files = [
    { name:'design-system.fig', size:'4.2 MB', pct:100, status:'done' },
    { name:'product-video.mp4', size:'28 MB', pct:62, status:'uploading' },
    { name:'icons-pack.zip', size:'1.1 MB', pct:0, status:'queued' },
  ];
}
