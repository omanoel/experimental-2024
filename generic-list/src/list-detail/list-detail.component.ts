import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.scss',
})
export class ListDetailComponent<T> implements OnInit {
  @Input() public items: T[] = [];
  @Input() public itemDetailTemplate: TemplateRef<{ item: T }> | null;
  @Input() public itemListItemTemplate: TemplateRef<{ item: T }> | null;
  @Input() public addOneItem: (() => () => T) | null;

  public selected: T | null = null;

  constructor() {
    this.itemDetailTemplate = null;
    this.itemListItemTemplate = null;
    this.addOneItem = null;
  }

  ngOnInit(): void {
    //
  }

  public addOne(): void {
    if (this.addOneItem) {
      const newItem: T = this.addOneItem()();
      this.items.push(newItem);
    }
  }
}
