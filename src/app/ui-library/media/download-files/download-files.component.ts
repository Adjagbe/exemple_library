// ═══════════════════════════════════════════════════════════════
// DOWNLOAD FILES COMPONENT - Premium UI Library
// Fichiers disponibles
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DownloadFile {
  id: string;
  name: string;
  version: string;
  size: string;
  type: string;
  date: Date;
  downloads: number;
  description?: string;
}

@Component({
  selector: 'ui-download-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-files.component.html',
  styleUrls: ['./download-files.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadFilesComponent {
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

  // Start download
  startDownload(file: DownloadFile): void {
    console.log('Starting download:', file.name);
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

  // Format downloads count
  formatDownloads(count: number): string {
    if (count >= 1000) return (count / 1000).toFixed(1) + 'k';
    return count.toString();
  }
}
