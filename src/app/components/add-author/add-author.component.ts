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
  @Output() onSaveAuthor : EventEmitter<[string, number , string, string]> = new EventEmitter();
  fullName! : string ;
  year_Born! : number; 
  technology! : string ; 
  profile! : string ; 
  @Output() authortmp!: [string, number , string, string] ;
  
  onSubmit(){
    this.authortmp = [this.fullName, this.year_Born, this.technology, this.profile] ;
    this.onSaveAuthor.emit(this.authortmp);
    this.fullName ='';
    this.technology ='';
    this.profile = '';
  }

}
