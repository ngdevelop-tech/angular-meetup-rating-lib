# Angular Rating Library

Angular Rating Component which can be independetly used and easily integrated with Angular Forms.

## Features 
- Rating icons are configurable.
- Rating colors and Message are configurable.
- Hide/Show rating message
- Maximum Rating is configurable
- Used independently
- Angular Forms Integration Support

## Installation

```
npm install --save @ngdevelop/sample-rating
```

## Usage

Independent Usage

```
<nd-sample-rating [hideRatingMessage]="false" [rating]="rating" (ratingChanged)="onRatingChange($event">
</nd-sample-rating>

```
Angular Form Integration Usage

```
<nd-sample-rating [formControl]="ratingControl">
</nd-sample-rating>

```
