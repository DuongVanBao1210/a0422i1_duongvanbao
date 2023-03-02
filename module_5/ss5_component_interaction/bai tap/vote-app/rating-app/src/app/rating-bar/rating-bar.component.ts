import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberHover: number = 5;
  numberActive: number = 5;

  constructor() {
  }

  ngOnInit(): void {
  }

  pickNumber(number: number) {
    this.numberActive = number;
  }
}
