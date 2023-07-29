import { Component } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css']
})
export class MissingNumberComponent {
  inputIndex: number = 0;
  missingNumber: number | null = null;

  findMissingNumber() {
    const series = [2, 3, 10, 15, 26, 35, 50, 63];
    if (this.inputIndex > 0 && this.inputIndex <= series.length) {
      let missingNumber = 2; // The series starts with 2
      for (let i = 0; i < this.inputIndex - 1; i++) {
        missingNumber += series[i + 1] - series[i];
      }
      this.missingNumber = missingNumber;
    } else {
      this.missingNumber = null;
    }
  }
}
