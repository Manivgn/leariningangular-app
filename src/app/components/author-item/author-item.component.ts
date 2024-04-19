import { Component, Input } from '@angular/core';
import { Author } from '../../Author';

@Component({
  selector: 'app-author-item',
  standalone: true,
  imports: [],
  templateUrl: './author-item.component.html',
  styleUrl: './author-item.component.css'
})
export class AuthorItemComponent {
  @Input() author : Author | undefined ;

}
