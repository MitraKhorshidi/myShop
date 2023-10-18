import { Component, Output, EventEmitter, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit , OnDestroy {

  @Output() changeCategory = new EventEmitter<string>();
  categories?: Array<string>;
  categorySubscription?: Subscription;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categorySubscription = this.storeService.getAllCategories()
      .subscribe((next) => this.categories = next);
  }

  onChangeCategory(category: string): void {
    this.changeCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categorySubscription){
      this.categorySubscription.unsubscribe();
    }
  }

}
