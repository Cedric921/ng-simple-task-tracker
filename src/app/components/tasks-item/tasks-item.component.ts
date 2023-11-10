import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  @Input() task: Task | null = null;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
