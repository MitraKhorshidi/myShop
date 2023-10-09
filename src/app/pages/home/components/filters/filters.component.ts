import { Component , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() changeCategory = new EventEmitter<string>();

  categories = ['Sport','Shoes','Women','Men'] ;

  onChangeCategory(category:string):void{
    this.changeCategory.emit(category);
  }
}
