import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-2.html',
  styleUrls: ['./widget-2.scss']
})
export class Widget2Component {
  tasks = [
    { title: 'Révision des maquettes', priority: 'high', done: false },
    { title: 'Mise à jour des dépendances', priority: 'medium', done: true },
    { title: 'Rédiger les specs API', priority: 'high', done: false },
    { title: 'Code review PR #42', priority: 'low', done: false },
    { title: 'Réunion client 14h', priority: 'medium', done: true }
  ];
  toggle(i: number) { this.tasks[i].done = !this.tasks[i].done; }
  get done() { return this.tasks.filter(t => t.done).length; }
  get total() { return this.tasks.length; }
  get pct() { return Math.round((this.done / this.total) * 100); }
}
