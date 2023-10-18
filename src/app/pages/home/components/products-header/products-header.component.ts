import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  @Output() coulumsCountChange = new EventEmitter<number>();
  @Output() countChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort: string = 'asc';
  itemsShowCount: number = 12;

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onCountChange(newCount: number): void {
    this.itemsShowCount = newCount;
    this.countChange.emit(newCount);
  }
  onCoulumsCountChange(newColsCount: number): void {
    this.coulumsCountChange.emit(newColsCount);
  }

}
