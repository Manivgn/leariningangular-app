import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../models/Author';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthorsDataService } from '../../services/authors-data.service';


@Component({
  selector: 'app-author-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './author-item.component.html',
  styleUrl: './author-item.component.css'
})
export class AuthorItemComponent {
  faTimes = faTrash;
  @Input() author!: Author;

  constructor(private authorsdataService: AuthorsDataService) {

  }

  onClick(author: Author) {
    this.authorsdataService.deleteAuthor(author?._id || "").subscribe((author) => console.log("deleted author : ", author));
    console.log("deleted")
  }

}
