import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-tags-variants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags-variants.component.html',
  styleUrl: './tags-variants.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TagsVariantsComponent {}
