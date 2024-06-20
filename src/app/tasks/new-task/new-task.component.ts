import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type NewTask } from './new-task-model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  newTaskData: NewTask = {
    title: '',
    summary: '',
    dueDate: '',
  };
  private tasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.newTaskData, this.userId);
    this.close.emit();
  }
}
