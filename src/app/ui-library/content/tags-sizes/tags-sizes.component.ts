// ═══════════════════════════════════════════════════════════════
// TAGS SIZES COMPONENT - Premium UI Library
// Démonstration des tailles de tags (XS → XL)
// ═══════════════════════════════════════════════════════════════

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-tags-sizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-sizes.component.html',
  styleUrl: './tags-sizes.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsSizesComponent {}
