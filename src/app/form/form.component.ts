import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitlecasePipe } from '../titlecase.pipe';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, TitlecasePipe, ListComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class FormComponent {
  inputText: string = '';
  items: string[] = [];
  selectedIndex: number | null = null; // Track selected index for editing

  onSubmit() {
  if(this.inputText.trim()!==null){
    if(this.selectedIndex!==null){
      this.items[this.selectedIndex]=this.inputText;
      this.inputText='';
      this.selectedIndex=null;
    }else{
      this.items.push(this.inputText);
      this.inputText='';
    }
  }
  }

  // handleItemSelected(item: string) {
  //   console.log(`Item selected from the list component: ${item}`);
  //   this.inputText = item; 
  //   this.selectedIndex = this.items.indexOf(item); 
  // }

  handleItemSelected(item:string){
    console.log(`Item selected fomm list component:${item}`);
    this.inputText=item;
    this.selectedIndex=this.items.indexOf(this.inputText);

  }
}
