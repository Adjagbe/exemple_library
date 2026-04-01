import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


export interface PdfFile {
  id: string;
  name: string;
  size: string;
  date: Date;
  author: string;
  totalPages?: number;
}
 

interface SimulatedPage {
  page: number;
  title: string;
  paragraphs: string[];
  hasList?: boolean;
  hasTable?: boolean;
}

const SIMULATED_PAGES: SimulatedPage[] = [
  {
    page: 1,
    title: 'Rapport Financier — Q4 2024',
    paragraphs: [
      'Le présent rapport présente une synthèse détaillée des performances financières du quatrième trimestre 2024. Les résultats témoignent d\'une croissance soutenue malgré un contexte macroéconomique incertain.',
      'Le chiffre d\'affaires consolidé atteint 12,4 M€ sur la période, soit une progression de +18,3 % par rapport au même trimestre de l\'exercice précédent.'
    ]
  },
  {
    page: 2,
    title: '1. Synthèse des résultats',
    paragraphs: [
      'L\'EBITDA s\'établit à 3,1 M€, représentant une marge de 25 %, en amélioration de 2 points sur un an. Cette performance reflète les efforts de maîtrise des coûts opérationnels engagés depuis le T2 2024.'
    ],
    hasTable: true
  },
  {
    page: 3,
    title: '2. Analyse par segment',
    paragraphs: [
      'Le segment B2B représente désormais 68 % du chiffre d\'affaires global, contre 61 % en 2023. La montée en puissance des contrats cadres pluriannuels explique cette progression structurelle.'
    ],
    hasList: true
  },
  {
    page: 4,
    title: '3. Flux de trésorerie',
    paragraphs: [
      'La capacité d\'autofinancement dégagée sur la période s\'élève à 2,7 M€. Les investissements nets (CAPEX) représentent 0,9 M€, essentiellement consacrés au renouvellement des infrastructures IT et à l\'extension de la capacité de production.',
      'La dette nette se réduit de 14 % pour atteindre 4,2 M€ en fin de trimestre.'
    ]
  },
  {
    page: 5,
    title: '4. Perspectives 2025',
    paragraphs: [
      'Le Conseil d\'Administration confirme les objectifs annoncés pour l\'exercice 2025 : un chiffre d\'affaires cible de 52 M€ (+12 %) et une marge EBITDA supérieure à 26 %.',
      'Les priorités stratégiques demeurent l\'expansion internationale, l\'accélération du développement produit et le renforcement de la qualité de service clients.'
    ],
    hasList: true
  },
  {
    page: 6,
    title: 'Annexes',
    paragraphs: [
      'Les états financiers détaillés, le rapport des commissaires aux comptes et les notes annexes aux comptes consolidés sont disponibles sur demande auprès de la Direction Financière.'
    ]
  }
];

@Component({
  selector: 'app-pdf-preview',
  imports: [CommonModule],
  templateUrl: './pdf-preview.html',
  styleUrl: './pdf-preview.scss',
})


export class PdfPreview {
  @Input() file: PdfFile = {
    id: '2',
    name: 'rapport-financier.pdf',
    size: '1.8 MB',
    date: new Date('2024-01-14'),
    author: 'Pierre Durand',
    totalPages: 6
  };
 

  currentPage = 1;
  zoom        = 100;
  showSidebar = true;
 
  pages: SimulatedPage[] = [];
 
  ngOnInit(): void {
    this.pages = SIMULATED_PAGES.slice(0, this.totalPages);
  }
 

  get totalPages(): number {
    return this.file.totalPages ?? SIMULATED_PAGES.length;
  }
 
  get currentPageData(): SimulatedPage | undefined {
    return this.pages.find(p => p.page === this.currentPage);
  }
 

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }
 
  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
 
  goToPage(n: number): void {
    this.currentPage = n;
  }
 
  zoomIn(): void {
    if (this.zoom < 200) this.zoom += 25;
  }
 
  zoomOut(): void {
    if (this.zoom > 50) this.zoom -= 25;
  }
 
  resetZoom(): void {
    this.zoom = 100;
  }
 
  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
 

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  }
 

  getRandomWidth(page: number, line: number): string {
    const widths = ['85%', '70%', '90%', '60%', '78%', '95%', '65%', '82%'];
    return widths[(page * 3 + line) % widths.length];
  }
}
