import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  inputText: string = ''; // Use `string` instead of `String`

  onSubmit() {
    console.log(this.inputText);
    // Optionally clear the input after submission
    this.inputText = '';
  }

}
