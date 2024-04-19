import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
@Input() name : string = '';
@Input() isDone : boolean = false;
@Input() description : string = '';
}
