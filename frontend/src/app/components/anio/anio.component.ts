import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrl: './anio.component.css',
  standalone: false,
})
export class AnioComponent {
  @Output() yearChange = new EventEmitter<number>();
  @Output() dateChange = new EventEmitter<Date>();aadawswsw
  minYear: number = 2018;
  maxYear: number = new Date().getFullYear();
  year: number = new Date().getFullYear();

  prevYear() {
    if (this.year > this.minYear) {
      this.year--;
      if (this.year === 2021) {
        this.year--;
      }
      this.yearChange.emit(this.year);
      this.setMaxDate(this.year);
    }
  }

  nextYear() {
    if (this.year < this.maxYear) {
      this.year++;
      if (this.year === 2021) {
        this.year++;
      }
    }
    this.yearChange.emit(this.year);
    this.setMaxDate(this.year);
  }

  selectedDate = new FormControl(new Date());

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    const month = date.getMonth();

    if (month !== 1) return false;

    if (this.year === 2025) {
      return date.getDate() >= 5 && date.getDate() <= 9;
    } else if (this.year === 2024) {
      return date.getDate() >= 7 && date.getDate() <= 11;
    } else if (this.year === 2023) {
      return date.getDate() >= 1 && date.getDate() <= 5;
    } else if (this.year === 2022) {
      return date.getDate() >= 9 && date.getDate() <= 13;
    } else if (this.year === 2020) {
      return date.getDate() >= 12 && date.getDate() <= 16;
    } else if (this.year === 2019) {
      return date.getDate() >= 13 && date.getDate() <= 17;
    } else if (this.year === 2024) {
      return date.getDate() >= 7 && date.getDate() <= 9;
    }
    return true;
  };

  ngOnInit() {
    this.setMaxDate(this.year);
  }

  setMaxDate(year: number) {
    let maxDate: Date;

    if (year === 2025) {
      maxDate = new Date(year, 1, 9);
    } else if (year === 2024) {
      maxDate = new Date(year, 1, 11);
    } else if (year === 2023) {
      maxDate = new Date(year, 1, 5);
    } else if (year === 2022) {
      maxDate = new Date(year, 1, 13);
    } else if (year === 2020) {
      maxDate = new Date(year, 1, 16);
    } else if (year === 2019) {
      maxDate = new Date(year, 1, 17);
    } else if (year === 2018) {
      maxDate = new Date(year, 1, 9);
    }

    this.selectedDate.setValue(maxDate);
    this.dateChange.emit(maxDate);
  }

  onDateChange(date: Date) {
    this.dateChange.emit(date);
  }

}
