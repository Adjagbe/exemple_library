import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TreeNode {
  id: number;
  label: string;
  icon: string;
  type: 'folder' | 'file';
  expanded?: boolean;
  selected?: boolean;
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-view-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view-1.html',
  styleUrls: ['./tree-view-1.scss']
})
export class TreeView1Component {
  selectedNode: TreeNode | null = null;

  tree: TreeNode[] = [
    {
      id: 1, label: 'my-project', icon: '📁', type: 'folder', expanded: true,
      children: [
        {
          id: 2, label: 'src', icon: '📁', type: 'folder', expanded: true,
          children: [
            {
              id: 3, label: 'app', icon: '📁', type: 'folder', expanded: true,
              children: [
                { id: 4, label: 'app.component.ts', icon: '📄', type: 'file' },
                { id: 5, label: 'app.module.ts', icon: '📄', type: 'file' },
                { id: 6, label: 'app.routes.ts', icon: '📄', type: 'file' },
              ]
            },
            {
              id: 7, label: 'assets', icon: '📁', type: 'folder', expanded: false,
              children: [
                { id: 8, label: 'logo.svg', icon: '🖼️', type: 'file' },
                { id: 9, label: 'favicon.ico', icon: '🖼️', type: 'file' },
              ]
            },
            { id: 10, label: 'main.ts', icon: '📄', type: 'file' },
            { id: 11, label: 'styles.scss', icon: '🎨', type: 'file' },
          ]
        },
        {
          id: 12, label: 'public', icon: '📁', type: 'folder', expanded: false,
          children: [
            { id: 13, label: 'index.html', icon: '🌐', type: 'file' },
          ]
        },
        { id: 14, label: 'package.json', icon: '📦', type: 'file' },
        { id: 15, label: 'tsconfig.json', icon: '⚙️', type: 'file' },
        { id: 16, label: 'angular.json', icon: '⚙️', type: 'file' },
        { id: 17, label: '.gitignore', icon: '🚫', type: 'file' },
        { id: 18, label: 'README.md', icon: '📝', type: 'file' },
      ]
    }
  ];

  toggle(node: TreeNode): void {
    if (node.type === 'folder') {
      node.expanded = !node.expanded;
    }
  }

  select(node: TreeNode): void {
    this.clearSelection(this.tree);
    node.selected = true;
    this.selectedNode = node;
  }

  private clearSelection(nodes: TreeNode[]): void {
    for (const node of nodes) {
      node.selected = false;
      if (node.children) {
        this.clearSelection(node.children);
      }
    }
  }
}
