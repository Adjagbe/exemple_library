

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DownloadProgress {
  id: string;
  name: string;
  size: number;
  downloaded: number;
  speed: string;
  status: 'downloading' | 'paused' | 'completed' | 'error';
}

@Component({
  selector: 'ui-download-active',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-active.component.html',
  styleUrls: ['./download-active.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadActiveComponent {
  // Active downloads
  activeDownloads: DownloadProgress[] = [
    { id: '1', name: 'Application-v2.4.0.dmg', size: 124000000, downloaded: 87000000, speed: '2.4 MB/s', status: 'downloading' },
    { id: '2', name: 'Documentation.pdf', size: 8500000, downloaded: 8500000, speed: '-', status: 'completed' },
    { id: '3', name: 'SDK-v3.1.0.zip', size: 45000000, downloaded: 15000000, speed: '-', status: 'paused' }
  ];

  // Pause download
  pauseDownload(download: DownloadProgress): void {
    download.status = 'paused';
  }

  // Resume download
  resumeDownload(download: DownloadProgress): void {
    download.status = 'downloading';
  }

  // Cancel download
  cancelDownload(id: string): void {
    this.activeDownloads = this.activeDownloads.filter(d => d.id !== id);
  }

  // Get progress percentage
  getProgress(download: DownloadProgress): number {
    return (download.downloaded / download.size) * 100;
  }

  // Format size
  formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
