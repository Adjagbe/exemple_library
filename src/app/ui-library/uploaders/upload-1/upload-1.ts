import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-upload-1', standalone: true, imports: [CommonModule], templateUrl: './upload-1.html', styleUrls: ['./upload-1.scss'] })
export class Upload1 {
  over = false;
  files: string[] = [];
  onDrop(e: DragEvent) { e.preventDefault(); this.over = false; const fs = e.dataTransfer?.files; if (fs) Array.from(fs).forEach(f => this.files.push(f.name)); }
  onOver(e: DragEvent) { e.preventDefault(); this.over = true; }
  onLeave() { this.over = false; }
  remove(i: number) { this.files.splice(i, 1); }
}
