import { Component }  from '@angular/core'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
  fullName : string = '';
  year_Born : number | undefined ; 
  technology : string = ''; 
  profile : string = ''; 
  

  onSubmit(){
    console.log('submit')
  }

}
