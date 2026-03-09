// ═══════════════════════════════════════════════════════════════
// DOWNLOAD HISTORY COMPONENT - Premium UI Library
// Historique des téléchargements
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-download-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-history.component.html',
  styleUrls: ['./download-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadHistoryComponent {
  // Download history
  downloadHistory: { name: string; date: Date; size: string }[] = [
    { name: 'Application-v2.3.0.exe', date: new Date('2024-01-05'), size: '122 MB' },
    { name: 'Plugin-v1.2.0.crx', date: new Date('2024-01-02'), size: '2.0 MB' },
    { name: 'Documentation-v2.3.pdf', date: new Date('2023-12-28'), size: '8.2 MB' }
  ];

  // Format date
  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
