import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Author } from '../../models/Author';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-author-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './author-item.component.html',
  styleUrl: './author-item.component.css'
})
export class AuthorItemComponent {
  faTimes = faTrash ;
  @Input() author! : Author;
  @Output() onDeleteAuthor : EventEmitter<Author> = new EventEmitter();

  onClick(author: Author){
    this.onDeleteAuthor.emit(author);
  }

}
