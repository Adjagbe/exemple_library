import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface ExportFormat {
  id: string;
  name: string;
  extension: string;
  icon: string;
  description: string;
  available: boolean;
}

export interface ExportColumn {
  key: string;
  label: string;
  selected: boolean;
}

export interface ExportOptions {
  format: string;
  dateRange: { start: string; end: string };
  columns: ExportColumn[];
  includeHeaders: boolean;
  filename: string;
}

@Component({
  selector: 'ui-export',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ExportComponent {
  // EXPORT FORMATS
  formats: ExportFormat[] = [
    { id: 'csv', name: 'CSV', extension: '.csv', icon: 'bi-filetype-csv', description: 'Fichier texte avec valeurs séparées par des virgules', available: true },
    { id: 'excel', name: 'Excel', extension: '.xlsx', icon: 'bi-file-earmark-excel', description: 'Tableur Microsoft Excel', available: true },
    { id: 'pdf', name: 'PDF', extension: '.pdf', icon: 'bi-file-earmark-pdf', description: 'Document PDF formaté', available: true },
    { id: 'json', name: 'JSON', extension: '.json', icon: 'bi-filetype-json', description: 'Format de données JSON', available: true }
  ];

  selectedFormat: string = 'csv';

  // COLUMNS
  columns: ExportColumn[] = [
    { key: 'id', label: 'ID', selected: true },
    { key: 'name', label: 'Nom', selected: true },
    { key: 'email', label: 'Email', selected: true },
    { key: 'phone', label: 'Téléphone', selected: true },
    { key: 'status', label: 'Statut', selected: true },
    { key: 'createdAt', label: 'Date création', selected: true },
    { key: 'lastLogin', label: 'Dernière connexion', selected: false },
    { key: 'role', label: 'Rôle', selected: true },
    { key: 'department', label: 'Département', selected: false }
  ];

  // OPTIONS
  includeHeaders: boolean = true;
  filename: string = 'export-data';
  dateStart: string = '';
  dateEnd: string = '';

  // STATE
  isExporting: boolean = false;
  exportProgress: number = 0;
  isModalOpen: boolean = false;
  previewData: any[] = [];
  totalRecords: number = 1547;

  // SAMPLE DATA
  sampleData = [
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@email.com', phone: '+33 6 12 34 56 78', status: 'Actif', createdAt: '2024-01-15', role: 'Admin' },
    { id: 2, name: 'Marie Martin', email: 'marie.martin@email.com', phone: '+33 6 23 45 67 89', status: 'Actif', createdAt: '2024-02-20', role: 'User' },
    { id: 3, name: 'Pierre Bernard', email: 'pierre.bernard@email.com', phone: '+33 6 34 56 78 90', status: 'Inactif', createdAt: '2024-03-10', role: 'User' }
  ];


  selectFormat(formatId: string): void {
    this.selectedFormat = formatId;
  }

  getSelectedFormat(): ExportFormat | undefined {
    return this.formats.find(f => f.id === this.selectedFormat);
  }

  toggleColumn(column: ExportColumn): void {
    column.selected = !column.selected;
  }

  selectAllColumns(): void {
    this.columns.forEach(c => c.selected = true);
  }

  deselectAllColumns(): void {
    this.columns.forEach(c => c.selected = false);
  }

  getSelectedColumnsCount(): number {
    return this.columns.filter(c => c.selected).length;
  }

  openModal(): void {
    this.isModalOpen = true;
    this.previewData = this.sampleData.slice(0, 3);
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.exportProgress = 0;
    this.isExporting = false;
  }

  startExport(): void {
    this.isExporting = true;
    this.exportProgress = 0;

    // Simulate export progress
    const interval = setInterval(() => {
      this.exportProgress += Math.random() * 15;
      if (this.exportProgress >= 100) {
        this.exportProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          this.downloadFile();
        }, 500);
      }
    }, 200);
  }

  downloadFile(): void {
    const format = this.getSelectedFormat();
    console.log(`Downloading ${this.filename}${format?.extension}`);
    
    // Simulate download
    setTimeout(() => {
      this.isExporting = false;
      this.closeModal();
    }, 500);
  }

  getPreviewColumns(): ExportColumn[] {
    return this.columns.filter(c => c.selected).slice(0, 5);
  }

  getEstimatedSize(): string {
    const columnsCount = this.getSelectedColumnsCount();
    const baseSize = this.totalRecords * columnsCount * 20; // Approximate bytes per cell
    
    if (baseSize < 1024) return `${baseSize} o`;
    if (baseSize < 1024 * 1024) return `${(baseSize / 1024).toFixed(1)} Ko`;
    return `${(baseSize / 1024 / 1024).toFixed(1)} Mo`;
  }
}
