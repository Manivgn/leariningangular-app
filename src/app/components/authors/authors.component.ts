import { Component, OnInit, inject } from '@angular/core';
import {AuthorsDataService} from '../../services/authors-data.service'
import {Author} from '../../Author';
import { AuthorItemComponent } from '../author-item/author-item.component';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [AuthorItemComponent,NgForOf],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  authors : Author [] = [] ;
  private authorsdataService : AuthorsDataService ;

  constructor(){
    this.authorsdataService = inject(AuthorsDataService);
  }

  ngOnInit(): void {
      this.authorsdataService.getAuthors().subscribe((authors) => this.authors = authors );
  }

  deleteAuthor(){
    console.log('deleted')
  }
}
