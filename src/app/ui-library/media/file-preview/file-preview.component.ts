// ═══════════════════════════════════════════════════════════════
// FILE PREVIEW COMPONENT - Premium UI Library
// File preview modal
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PreviewFile {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'video' | 'audio' | 'code' | 'document' | 'spreadsheet' | 'other';
  size: string;
  date: Date;
  author: string;
  content?: string;
}

@Component({
  selector: 'ui-file-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilePreviewComponent {
  // Preview state
  isPreviewOpen: boolean = false;
  currentFile: PreviewFile | null = null;

  // Sample files
  files: PreviewFile[] = [
    {
      id: '1',
      name: 'dashboard-design.png',
      type: 'image',
      size: '2.4 MB',
      date: new Date('2024-01-15'),
      author: 'Marie Lambert'
    },
    {
      id: '2',
      name: 'rapport-financier.pdf',
      type: 'pdf',
      size: '1.8 MB',
      date: new Date('2024-01-14'),
      author: 'Pierre Durand'
    },
    {
      id: '3',
      name: 'demo-product.mp4',
      type: 'video',
      size: '45 MB',
      date: new Date('2024-01-13'),
      author: 'Sophie Martin'
    },
    {
      id: '4',
      name: 'podcast-episode.mp3',
      type: 'audio',
      size: '12 MB',
      date: new Date('2024-01-12'),
      author: 'Jean Dupont'
    },
    {
      id: '5',
      name: 'app.component.ts',
      type: 'code',
      size: '4.2 KB',
      date: new Date('2024-01-11'),
      author: 'Marie Lambert',
      content: `import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.html',
        styleUrls: ['./app.scss']
      })
      export class AppComponent {
        title = 'Premium UI Library';
      }`
    },
    {
      id: '6',
      name: 'specifications.docx',
      type: 'document',
      size: '856 KB',
      date: new Date('2024-01-10'),
      author: 'Pierre Durand'
    },
    {
      id: '7',
      name: 'analytics-data.xlsx',
      type: 'spreadsheet',
      size: '1.2 MB',
      date: new Date('2024-01-09'),
      author: 'Sophie Martin'
    }
  ];

  // Open preview
  openPreview(file: PreviewFile): void {
    this.currentFile = file;
    this.isPreviewOpen = true;
  }

  // Close preview
  closePreview(): void {
    this.isPreviewOpen = false;
    this.currentFile = null;
  }

  // Get file icon
  getFileIcon(type: string): string {
    const icons: Record<string, string> = {
      image: 'bi-file-earmark-image',
      pdf: 'bi-file-earmark-pdf',
      video: 'bi-file-earmark-play',
      audio: 'bi-file-earmark-music',
      code: 'bi-file-earmark-code',
      document: 'bi-file-earmark-word',
      spreadsheet: 'bi-file-earmark-excel',
      other: 'bi-file-earmark'
    };
    return icons[type] || 'bi-file-earmark';
  }

  // Get file color
  getFileColor(type: string): string {
    const colors: Record<string, string> = {
      image: '#8b5cf6',
      pdf: '#ef4444',
      video: '#ec4899',
      audio: '#06b6d4',
      code: '#10b981',
      document: '#3b82f6',
      spreadsheet: '#22c55e',
      other: '#6b7280'
    };
    return colors[type] || '#6b7280';
  }

  // Format date
  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
