import { Component, EventEmitter, Output }  from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { Author } from '../../models/Author';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
  @Output() onSaveAuthor : EventEmitter<Author> = new EventEmitter();
  fullName : string = '';
  year_Born : number | undefined ; 
  technology : string = ''; 
  profile : string = ''; 
  
  onSubmit(){
    this.onSaveAuthor.emit();
  }

}
