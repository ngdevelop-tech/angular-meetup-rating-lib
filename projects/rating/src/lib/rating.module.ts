import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RatingComponent, RatingConfig } from './rating.component';



@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule
  ],
  exports: [RatingComponent]
})
export class RatingModule {

  static forRoot(config: RatingConfig  | null) : ModuleWithProviders < RatingModule > {
      return {
          ngModule: RatingModule,
          providers: [
              { provide: RatingConfig, useValue: config }
          ]
      }
   }

}
