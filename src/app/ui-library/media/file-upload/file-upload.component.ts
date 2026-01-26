// ═══════════════════════════════════════════════════════════════
// FILE UPLOAD COMPONENT - Premium UI Library
// File upload with progress
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

@Component({
  selector: 'ui-file-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {
  // Files
  files: UploadFile[] = [];

  // Drag state
  isDragging: boolean = false;

  // Demo files
  demoFiles: UploadFile[] = [
    { id: '1', name: 'rapport-annuel-2024.pdf', size: 2450000, type: 'application/pdf', progress: 100, status: 'completed' },
    { id: '2', name: 'presentation.pptx', size: 5800000, type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', progress: 75, status: 'uploading' },
    { id: '3', name: 'data-export.xlsx', size: 1200000, type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', progress: 45, status: 'uploading' },
    { id: '4', name: 'photo-equipe.jpg', size: 3500000, type: 'image/jpeg', progress: 0, status: 'error', error: 'Fichier trop volumineux' }
  ];

  constructor() {
    this.files = [...this.demoFiles];
  }

  // Handle drag over
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  // Handle drag leave
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  // Handle drop
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.handleFiles(droppedFiles);
    }
  }

  // Handle file input
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  // Handle files
  handleFiles(fileList: FileList): void {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const uploadFile: UploadFile = {
        id: Date.now().toString() + i,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: 'pending'
      };
      this.files.push(uploadFile);
      this.simulateUpload(uploadFile);
    }
  }

  // Simulate upload
  simulateUpload(file: UploadFile): void {
    file.status = 'uploading';
    const interval = setInterval(() => {
      if (file.progress >= 100) {
        clearInterval(interval);
        file.status = 'completed';
      } else {
        file.progress += Math.random() * 15;
        if (file.progress > 100) file.progress = 100;
      }
    }, 300);
  }

  // Remove file
  removeFile(id: string): void {
    this.files = this.files.filter(f => f.id !== id);
  }

  // Retry upload
  retryUpload(file: UploadFile): void {
    file.progress = 0;
    file.error = undefined;
    this.simulateUpload(file);
  }

  // Clear all
  clearAll(): void {
    this.files = [];
  }

  // Format file size
  formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Get file icon
  getFileIcon(type: string): string {
    if (type.includes('image')) return 'bi-file-earmark-image';
    if (type.includes('pdf')) return 'bi-file-earmark-pdf';
    if (type.includes('word') || type.includes('document')) return 'bi-file-earmark-word';
    if (type.includes('excel') || type.includes('spreadsheet')) return 'bi-file-earmark-excel';
    if (type.includes('powerpoint') || type.includes('presentation')) return 'bi-file-earmark-ppt';
    if (type.includes('zip') || type.includes('archive')) return 'bi-file-earmark-zip';
    if (type.includes('video')) return 'bi-file-earmark-play';
    if (type.includes('audio')) return 'bi-file-earmark-music';
    return 'bi-file-earmark';
  }

  // Get file color
  getFileColor(type: string): string {
    if (type.includes('image')) return '#8b5cf6';
    if (type.includes('pdf')) return '#ef4444';
    if (type.includes('word') || type.includes('document')) return '#3b82f6';
    if (type.includes('excel') || type.includes('spreadsheet')) return '#10b981';
    if (type.includes('powerpoint') || type.includes('presentation')) return '#f97316';
    if (type.includes('zip')) return '#f59e0b';
    if (type.includes('video')) return '#ec4899';
    if (type.includes('audio')) return '#06b6d4';
    return '#6b7280';
  }

  // Get completed count
  get completedCount(): number {
    return this.files.filter(f => f.status === 'completed').length;
  }

  // Get total size
  get totalSize(): number {
    return this.files.reduce((acc, f) => acc + f.size, 0);
  }
}
