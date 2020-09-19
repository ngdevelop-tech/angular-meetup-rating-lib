import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';

export enum RatingType {
    POOR, AVERAGE, GOOD, AMAZING
}

export class RatingConfig {
    // colors?: {
    //     [key: number]: string
    // };
    // ratingMessage?: {
    //     [key: number]: string
    // };
    ratingIcons?: {
        filled: string;
        empty: string;
    }
}

@Component({
  selector: 'lib-rating',
  template: `
    <div class="rating">
        <div class="rating-icons">
            <i [style.fontSize]="'30px'" [style.color]="colors[ratingType]" *ngFor="let r of range"
                [ngClass]="rating < r ? ratingIcons.empty : ratingIcons.filled"
                 aria-hidden="true" (click)="updateRating(r)"></i>
        </div>
        <div class="rating-message">
            {{ratingMessages[ratingType]}}
        </div>
    </div>
  `,
  styles: [
    `
      .rating.disabled i{
          opacity: 0.5;
          pointer-events: none;
      }
      
      i{
          transition: all 200ms;
          margin: 5px;
      }
      
      .rating-message{
          font-size: 20px;
      }
      
      i:hover{
          transform: scale(1.2, 1.2)
      }
    `
  ]
})
export class RatingComponent implements OnInit {

  @Input() ratingIcons = {
    filled: 'fa fa-star',
    empty: 'fa fa-star-o'
  }

  @Input() colors = {
      [RatingType.POOR]: 'red',
      [RatingType.AVERAGE]: 'orange',
      [RatingType.GOOD]: 'greenyellow',
      [RatingType.AMAZING]: 'green',
  };

  @Input() ratingMessages = {
      [RatingType.POOR]: 'Poor',
      [RatingType.AVERAGE]: 'Average',
      [RatingType.GOOD]: 'Good',
      [RatingType.AMAZING]: 'Amazing'
  };

  @Input() maxRating = 5;
  @Input() rating = 3;

  @Output() ratingChanged = new EventEmitter<number>();

  range: number[];
  ratingType : RatingType;

  constructor(@Optional() config: RatingConfig) { 
    if(config?.ratingIcons){
      this.ratingIcons = config?.ratingIcons;
    }
  }

  ngOnInit(): void {
    this.updateRange();
    this.calculateRatingType();
  }

  updateRange() {
      this.range = Array(this.maxRating).fill(0).map((a, index) => index + 1);
  }

  updateRating(rating: number){
    this.rating = rating;
    this.calculateRatingType();
    this.ratingChanged.emit(rating);
  }

  calculateRatingType() {
      if (!this.rating) {
          this.ratingType = undefined;
          return;
      }
  
      let percentage = this.rating * 100 / this.maxRating;
      if (percentage <= 25) {
          this.ratingType = RatingType.POOR;
      } else if (percentage <= 60) {
          this.ratingType = RatingType.AVERAGE;
      } else if (percentage <= 80) {
          this.ratingType = RatingType.GOOD
      } else {
          this.ratingType = RatingType.AMAZING
      }
  }

}
