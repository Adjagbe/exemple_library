// ═══════════════════════════════════════════════════════════════
// DOWNLOAD COMPONENT - Premium UI Library
// Download manager
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DownloadFile {
  id: string;
  name: string;
  version: string;
  size: string;
  type: string;
  date: Date;
  downloads: number;
  platform?: string;
  description?: string;
}

interface DownloadProgress {
  id: string;
  name: string;
  size: number;
  downloaded: number;
  speed: string;
  status: 'downloading' | 'paused' | 'completed' | 'error';
}

@Component({
  selector: 'ui-download',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadComponent {
  // Available downloads
  availableDownloads: DownloadFile[] = [
    {
      id: '1',
      name: 'Application Desktop',
      version: '2.4.0',
      size: '124 MB',
      type: 'installer',
      date: new Date('2024-01-15'),
      downloads: 12450,
      description: 'Application complète pour Windows, Mac et Linux'
    },
    {
      id: '2',
      name: 'Documentation PDF',
      version: '2.4.0',
      size: '8.5 MB',
      type: 'pdf',
      date: new Date('2024-01-15'),
      downloads: 5680,
      description: 'Guide complet d\'utilisation'
    },
    {
      id: '3',
      name: 'Plugin Chrome',
      version: '1.2.3',
      size: '2.1 MB',
      type: 'extension',
      date: new Date('2024-01-10'),
      downloads: 8920,
      description: 'Extension pour navigateur Chrome'
    },
    {
      id: '4',
      name: 'SDK Développeur',
      version: '3.1.0',
      size: '45 MB',
      type: 'sdk',
      date: new Date('2024-01-08'),
      downloads: 3240,
      description: 'Kit de développement avec API et exemples'
    }
  ];

  // Platform downloads
  platformDownloads: { platform: string; icon: string; size: string; url: string }[] = [
    { platform: 'Windows', icon: 'bi-windows', size: '124 MB', url: '#' },
    { platform: 'macOS', icon: 'bi-apple', size: '118 MB', url: '#' },
    { platform: 'Linux', icon: 'bi-ubuntu', size: '98 MB', url: '#' },
    { platform: 'Source', icon: 'bi-code-square', size: '45 MB', url: '#' }
  ];

  // Active downloads
  activeDownloads: DownloadProgress[] = [
    { id: '1', name: 'Application-v2.4.0.dmg', size: 124000000, downloaded: 87000000, speed: '2.4 MB/s', status: 'downloading' },
    { id: '2', name: 'Documentation.pdf', size: 8500000, downloaded: 8500000, speed: '-', status: 'completed' },
    { id: '3', name: 'SDK-v3.1.0.zip', size: 45000000, downloaded: 15000000, speed: '-', status: 'paused' }
  ];

  // Download history
  downloadHistory: { name: string; date: Date; size: string }[] = [
    { name: 'Application-v2.3.0.exe', date: new Date('2024-01-05'), size: '122 MB' },
    { name: 'Plugin-v1.2.0.crx', date: new Date('2024-01-02'), size: '2.0 MB' },
    { name: 'Documentation-v2.3.pdf', date: new Date('2023-12-28'), size: '8.2 MB' }
  ];

  // Start download
  startDownload(file: DownloadFile): void {
    console.log('Starting download:', file.name);
  }

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

  // Get file icon
  getFileIcon(type: string): string {
    const icons: Record<string, string> = {
      installer: 'bi-box-seam',
      pdf: 'bi-file-earmark-pdf',
      extension: 'bi-puzzle',
      sdk: 'bi-code-slash'
    };
    return icons[type] || 'bi-file-earmark';
  }

  // Format date
  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // Format downloads count
  formatDownloads(count: number): string {
    if (count >= 1000) return (count / 1000).toFixed(1) + 'k';
    return count.toString();
  }
}
