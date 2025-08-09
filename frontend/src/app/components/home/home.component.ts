import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false,
})
export class HomeComponent {
  selectedYear: number = new Date().getFullYear();
  selectedDate: Date = new Date();

  onYearChange(newYear: number) {
    this.selectedYear = newYear;
  }

  onDateChange(newDate: Date) {
    this.selectedDate = newDate;
  }

}
