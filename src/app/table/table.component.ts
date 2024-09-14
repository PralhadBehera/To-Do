import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ListComponent,FormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
