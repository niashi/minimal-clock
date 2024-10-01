import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { TimezoneSelectorComponent } from './timezone-selector/timezone-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClockComponent, TimezoneSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'minimal-clock';
  selectedTimezone = 'local';

  updateTimezone(timezone: string) {
    this.selectedTimezone = timezone;
  }
}
