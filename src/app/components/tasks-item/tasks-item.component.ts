import { Component, Input } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  @Input() task: Task | null = null;
}
