import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Author } from '../../models/Author';
import { AuthorsDataService } from '../../services/authors-data.service';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
  fullName!: string;
  year_Born!: number;
  technology!: string;
  profile!: string;

  constructor(private authorsdataService: AuthorsDataService) {

  }

  onSubmit() {
    this.authorsdataService.addAuthor(this.fullName, this.year_Born, this.technology, this.profile)
      .subscribe((author) => {
        console.log(author);
      })
    this.fullName = '';
    this.technology = '';
    this.profile = '';
  }

}
