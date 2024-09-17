
import { CommonModule } from '@angular/common';
import { Component, Input ,Output, EventEmitter } from '@angular/core';
import { TitlecasePipe } from '../titlecase.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TitlecasePipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() items: string[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  removeItem(index: number) {
    this.items.splice(index,1);
  }
  selectItem(item:string){
    console.log(`Item selected for update : ${item}`);
    this.itemSelected.emit(item)
  }
 
}

