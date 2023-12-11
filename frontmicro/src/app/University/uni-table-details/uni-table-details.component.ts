import { Component, Input, Output, EventEmitter } from '@angular/core';
import { University } from 'src/app/models/university.model';
@Component({
  selector: 'app-uni-table-details',
  templateUrl: './uni-table-details.component.html',
  styleUrls: ['./uni-table-details.component.css']
})
export class UniTableDetailsComponent {
  @Input() university: University | null = null;
  @Output() closeDetailsEvent: EventEmitter<void> = new EventEmitter<void>();
  closeDetails(): void {
    this.closeDetailsEvent.emit();
  }
}
