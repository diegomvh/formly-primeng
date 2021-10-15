import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Rating } from 'primeng/rating';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-rating',
  template: `
    <p-rating
      [stars]="to.stars || 5"
      [cancel]="to.cancel"
      [disabled]="to.disabled"
      [readonly]="to.readonly"
      (onRate)="to.onRate && to.onRate(field, $event)"
      (onCancel)="to.onCancel && to.onCancel(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRating extends PrimengComponentType {
  @ViewChild(Rating) rating!: Rating;
}
