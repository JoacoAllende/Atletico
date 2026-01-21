import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrl: './anio.component.css',
  standalone: false,
})
export class AnioComponent implements OnInit {
  @Output() yearChange = new EventEmitter<number>();
  @Output() dateChange = new EventEmitter<Date>();

  minYear: number = 2018;
  maxYear: number = new Date().getFullYear();
  year: number = new Date().getFullYear();
  selectedDate: number | null = null;

  yearDaysMap: Record<number, number[]> = {
    2026: [4, 5, 6, 7, 8],
    2025: [5, 6, 7, 8, 9],
    2024: [7, 8, 9, 10, 11],
    2023: [1, 2, 3, 4, 5],
    2022: [9, 10, 11, 12, 13],
    2020: [12, 13, 14, 15, 16],
    2019: [13, 14, 15, 16, 17],
    2018: [7]
  };

  availableYears = Object.keys(this.yearDaysMap).map(y => +y);
  availableDays: number[] = [];

  ngOnInit() {
    this.updateAvailableDays();
  }

  prevYear() {
    if (this.year > this.minYear) {
      this.year--;
      if (this.year === 2021) {
        this.year--;
      }
      this.updateAvailableDays();
    }
  }

  nextYear() {
    if (this.year < this.maxYear) {
      this.year++;
      if (this.year === 2021) {
        this.year++;
      }
      this.updateAvailableDays();
    }
  }

  selectYear(y: number) {
    this.year = y;
    this.updateAvailableDays();
  }

  selectDate(day: number) {
    this.selectedDate = day;
    const selectedFullDate = new Date(this.year, 1, day);
    this.dateChange.emit(selectedFullDate);
  }

  updateAvailableDays() {
    this.availableDays = this.yearDaysMap[this.year] || [];
    
    if (this.availableDays.length > 0) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
      const currentDay = today.getDate();

      if (this.year === currentYear) {
        const firstDay = this.availableDays[0];
        const lastDay = this.availableDays[this.availableDays.length - 1];

        if (currentMonth < 1) {
          this.selectedDate = firstDay;
        } else if (currentMonth > 1) {
          this.selectedDate = lastDay;
        } else {
          if (currentDay < firstDay) {
            this.selectedDate = firstDay;
          } else if (currentDay > lastDay) {
            this.selectedDate = lastDay;
          } else {
            if (this.availableDays.includes(currentDay)) {
              this.selectedDate = currentDay;
            } else {
              this.selectedDate = firstDay;
            }
          }
        }
      } else {
        this.selectedDate = this.availableDays[this.availableDays.length - 1];
      }

      this.emitDateChange();
    } else {
      this.selectedDate = null;
    }

    this.yearChange.emit(this.year);
  }

  emitDateChange() {
    if (this.selectedDate !== null) {
      const selectedFullDate = new Date(this.year, 1, this.selectedDate);
      this.dateChange.emit(selectedFullDate);
    }
  }
}
