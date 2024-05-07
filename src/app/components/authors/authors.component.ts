import { Component, OnInit, inject } from '@angular/core';
import {AuthorsDataService} from '../../services/authors-data.service'
import {Author} from '../../models/Author';
import { AuthorItemComponent } from '../author-item/author-item.component';
import { NgForOf } from '@angular/common';
import { AddAuthorComponent } from '../add-author/add-author.component';
@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [AuthorItemComponent,AddAuthorComponent,NgForOf],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  authors : Author [] = [] ;
  private authorsdataService = inject(AuthorsDataService);

  ngOnInit(): void {
      this.authorsdataService.getAuthors().subscribe((authors) => this.authors = authors );
  }

  deleteAuthor(){
    console.log('deleted')
  }
}
