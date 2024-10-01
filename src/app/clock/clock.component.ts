import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css',
})
// Implements time presentation logic.
export class ClockComponent {
  // O componente do relógio tem duas propriedades: timezone e currentTime. Elas são intrínsecas desta classe e servirão para apresentar as informações.
  // '@Input()' serve para indicar ao Angular que esta propriedade poderá ser sobrescrita no template, ou seja, será feita a 'property binding'.
  @Input() timezone: String = 'local';
  currentTime: String = '';

  // Hook called after component initialization.
  // This is what is done:
  // 1. Call updateTime() once;
  // 2. Call the same function every second through setInterval();
  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Updates clock every second.
  }

  // This one does two things:
  // 1. Creates a new instance of Date;
  // 2. Analyses the state of timezone, that is, whether it is 'local'. If so, currentTime receives a the local time. If not, currentTime receives the time updated based on the location.
  updateTime(): void {
    const now = new Date();

    if (this.timezone === 'local') {
      this.currentTime = now.toLocaleTimeString();
    } else {
      this.currentTime = now.toLocaleTimeString('en-US', {
        timeZone: this.timezone.toString(),
        hour12: false,
      });
    }
  }
}
