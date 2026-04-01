import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-code-block-3', standalone: true, imports: [CommonModule], templateUrl: './code-block-3.html', styleUrl: './code-block-3.scss' })
export class CodeBlock3 {
  steps = [
    { title: 'Installation', cmd: 'npm install @premium-ui/angular', lang: 'bash' },
    { title: 'Import du module', cmd: `import { PremiumUIModule } from '@premium-ui/angular';\n\n@NgModule({\n  imports: [PremiumUIModule]\n})`, lang: 'typescript' },
    { title: 'Utilisation', cmd: `<ui-button variant="primary">Démarrer</ui-button>`, lang: 'html' }
  ];
  copied: number | null = null;
  copy(i: number, text: string) { navigator.clipboard.writeText(text); this.copied = i; setTimeout(() => this.copied = null, 2000); }
}
