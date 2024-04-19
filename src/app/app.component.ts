import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning-angular-app';
}
