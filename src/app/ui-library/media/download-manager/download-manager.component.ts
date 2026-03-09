import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-download-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadManagerComponent {
  // Platform downloads
  platformDownloads: { platform: string; icon: string; size: string; url: string }[] = [
    { platform: 'Windows', icon: 'bi-windows', size: '124 MB', url: '#' },
    { platform: 'macOS', icon: 'bi-apple', size: '118 MB', url: '#' },
    { platform: 'Linux', icon: 'bi-ubuntu', size: '98 MB', url: '#' },
    { platform: 'Source', icon: 'bi-code-square', size: '45 MB', url: '#' }
  ];
}
