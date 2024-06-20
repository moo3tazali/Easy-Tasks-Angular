import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  computed,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: Boolean;

  get imagePath() {
    return `users/${this.user.avatar}`;
  } // old way

  // or signal way bellow
  // avatar = input.required<string>(); // new signal way to set an attribute
  // imagePath = computed(() => `users/${this.avatar()}`); // new signal way

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
