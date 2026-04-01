import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-code-block-2', standalone: true, imports: [CommonModule], templateUrl: './code-block-2.html', styleUrl: './code-block-2.scss' })
export class CodeBlock2 {
  tabs = ['HTML', 'CSS', 'TypeScript'];
  active = 0;
  codes = [
    `<button class="btn btn--primary">\n  <i class="bi bi-check"></i> Submit\n</button>`,
    `.btn {\n  padding: .75rem 1.5rem;\n  border-radius: .5rem;\n  font-weight: 600;\n}\n.btn--primary {\n  background: #4f46e5;\n  color: white;\n}`,
    `export class ButtonComponent {\n  @Input() label = 'Submit';\n  @Output() clicked = new EventEmitter();\n\n  onClick() {\n    this.clicked.emit();\n  }\n}`
  ];
}
