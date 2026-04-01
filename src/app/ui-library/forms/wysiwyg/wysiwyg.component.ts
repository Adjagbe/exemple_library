import { Component, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ToolbarAction {
  icon: string;
  title: string;
  command: string;
  value?: string;
}

@Component({
  selector: 'ui-wysiwyg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WysiwygComponent implements AfterViewInit {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;

  // Editor content
  content = `<h2>Bienvenue dans l'éditeur WYSIWYG</h2>
<p>Cet éditeur vous permet de créer du <strong>contenu riche</strong> avec de nombreuses options de formatage.</p>
<p>Voici quelques fonctionnalités :</p>
<ul>
  <li><em>Formatage du texte</em> (gras, italique, souligné)</li>
  <li>Listes à puces et numérotées</li>
  <li>Liens et citations</li>
  <li>Alignement du texte</li>
</ul>
<blockquote>Essayez de sélectionner du texte et d'utiliser la barre d'outils pour le formater.</blockquote>`;

  // States
  showSourceCode = false;
  sourceCode = '';
  wordCount = 0;
  charCount = 0;
  showLinkModal = false;
  linkUrl = '';
  linkText = '';
  showImageModal = false;
  imageUrl = '';
  imageAlt = '';
  selectedHeading = 'p';

  // Formatting states
  isBold = false;
  isItalic = false;
  isUnderline = false;
  isStrikethrough = false;

  // Text formatting tools
  textFormattingTools: ToolbarAction[] = [
    { icon: 'bi-type-bold', title: 'Gras (Ctrl+B)', command: 'bold' },
    { icon: 'bi-type-italic', title: 'Italique (Ctrl+I)', command: 'italic' },
    { icon: 'bi-type-underline', title: 'Souligné (Ctrl+U)', command: 'underline' },
    { icon: 'bi-type-strikethrough', title: 'Barré', command: 'strikeThrough' }
  ];

  // Alignment tools
  alignmentTools: ToolbarAction[] = [
    { icon: 'bi-text-left', title: 'Aligner à gauche', command: 'justifyLeft' },
    { icon: 'bi-text-center', title: 'Centrer', command: 'justifyCenter' },
    { icon: 'bi-text-right', title: 'Aligner à droite', command: 'justifyRight' },
    { icon: 'bi-justify', title: 'Justifier', command: 'justifyFull' }
  ];

  // List tools
  listTools: ToolbarAction[] = [
    { icon: 'bi-list-ul', title: 'Liste à puces', command: 'insertUnorderedList' },
    { icon: 'bi-list-ol', title: 'Liste numérotée', command: 'insertOrderedList' }
  ];

  // Heading options
  headingOptions = [
    { value: 'p', label: 'Paragraphe' },
    { value: 'h1', label: 'Titre 1' },
    { value: 'h2', label: 'Titre 2' },
    { value: 'h3', label: 'Titre 3' },
    { value: 'h4', label: 'Titre 4' }
  ];

  ngAfterViewInit(): void {
    this.updateStats();
  }

  // Execute command
  execCommand(command: string, value?: string): void {
    document.execCommand(command, false, value);
    this.updateStats();
    this.updateFormattingState();
    this.focusEditor();
  }

  // Format heading
  formatHeading(): void {
    if (this.selectedHeading === 'p') {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, `<${this.selectedHeading}>`);
    }
    this.focusEditor();
  }

  // Insert link
  openLinkModal(): void {
    const selection = window.getSelection();
    this.linkText = selection ? selection.toString() : '';
    this.linkUrl = '';
    this.showLinkModal = true;
  }

  insertLink(): void {
    if (this.linkUrl) {
      if (this.linkText) {
        const linkHtml = `<a href="${this.linkUrl}" target="_blank">${this.linkText}</a>`;
        document.execCommand('insertHTML', false, linkHtml);
      } else {
        document.execCommand('createLink', false, this.linkUrl);
      }
    }
    this.closeLinkModal();
    this.focusEditor();
  }

  closeLinkModal(): void {
    this.showLinkModal = false;
    this.linkUrl = '';
    this.linkText = '';
  }

  // Insert image
  openImageModal(): void {
    this.imageUrl = '';
    this.imageAlt = '';
    this.showImageModal = true;
  }

  insertImage(): void {
    if (this.imageUrl) {
      const imgHtml = `<img src="${this.imageUrl}" alt="${this.imageAlt}" style="max-width: 100%; height: auto;">`;
      document.execCommand('insertHTML', false, imgHtml);
    }
    this.closeImageModal();
    this.focusEditor();
  }

  closeImageModal(): void {
    this.showImageModal = false;
    this.imageUrl = '';
    this.imageAlt = '';
  }

  // Insert quote
  insertQuote(): void {
    document.execCommand('formatBlock', false, '<blockquote>');
    this.focusEditor();
  }

  // Insert code
  insertCode(): void {
    document.execCommand('formatBlock', false, '<pre>');
    this.focusEditor();
  }

  // Insert horizontal rule
  insertHr(): void {
    document.execCommand('insertHorizontalRule', false);
    this.focusEditor();
  }

  // Indent/Outdent
  indent(): void {
    document.execCommand('indent', false);
    this.focusEditor();
  }

  outdent(): void {
    document.execCommand('outdent', false);
    this.focusEditor();
  }

  // Undo/Redo
  undo(): void {
    document.execCommand('undo', false);
    this.updateStats();
  }

  redo(): void {
    document.execCommand('redo', false);
    this.updateStats();
  }

  // Clear formatting
  clearFormatting(): void {
    document.execCommand('removeFormat', false);
    this.focusEditor();
    this.updateFormattingState();
  }

  // Toggle source code view
  toggleSourceCode(): void {
    if (this.showSourceCode) {
      this.content = this.sourceCode;
      if (this.editorRef) {
        this.editorRef.nativeElement.innerHTML = this.content;
      }
    } else {
      this.sourceCode = this.editorRef.nativeElement.innerHTML;
    }
    this.showSourceCode = !this.showSourceCode;
  }

  // Update content from editor
  onEditorInput(): void {
    this.content = this.editorRef.nativeElement.innerHTML;
    this.updateStats();
    this.updateFormattingState();
  }

  // Update word/char count
  updateStats(): void {
    if (this.editorRef) {
      const text = this.editorRef.nativeElement.innerText || '';
      this.charCount = text.length;
      this.wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    }
  }

  // Update formatting state
  updateFormattingState(): void {
    this.isBold = document.queryCommandState('bold');
    this.isItalic = document.queryCommandState('italic');
    this.isUnderline = document.queryCommandState('underline');
    this.isStrikethrough = document.queryCommandState('strikeThrough');
  }

  // Focus editor
  focusEditor(): void {
    if (this.editorRef) {
      this.editorRef.nativeElement.focus();
    }
  }

  // Keyboard shortcuts
  onKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 'b':
          event.preventDefault();
          this.execCommand('bold');
          break;
        case 'i':
          event.preventDefault();
          this.execCommand('italic');
          break;
        case 'u':
          event.preventDefault();
          this.execCommand('underline');
          break;
        case 'z':
          if (event.shiftKey) {
            event.preventDefault();
            this.redo();
          }
          break;
      }
    }
  }

  // Check if command active
  isCommandActive(command: string): boolean {
    return document.queryCommandState(command);
  }
}
