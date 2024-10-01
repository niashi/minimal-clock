import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-timezone-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timezone-selector.component.html',
  styleUrl: './timezone-selector.component.css',
})
export class TimezoneSelectorComponent {
  // Allows user to select different timezones.
  @Output() timezoneChange = new EventEmitter<string>();

  // List of timezones.
  timezones = [
    { name: 'Local Time', value: 'local' },
    { name: 'New York', value: 'America/New_York' },
    { name: 'London', value: 'Europe/London' },
    { name: 'Tokyo', value: 'Asia/Tokyo' },
    { name: 'Sydney', value: 'Australia/Sydney' },
  ];

  // Receives an event as seen at (change)="onTimezoneChange($event)" on the template.
  // The $event argument contains details of change when another option is selected, such as the selected value.
  onTimezoneChange(event: any) {
    this.timezoneChange.emit(event.target.value);
  }
}
