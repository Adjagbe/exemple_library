import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-code-block-1', standalone: true, imports: [CommonModule], templateUrl: './code-block-1.html', styleUrl: './code-block-1.scss' })
export class CodeBlock1 {
  copied = false;
  code = `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`<h1>Hello, {{ title }}!</h1>\`
})
export class AppComponent {
  title = 'my-angular-app';
}`;
  copy() { navigator.clipboard.writeText(this.code); this.copied = true; setTimeout(() => this.copied = false, 2000); }
}
