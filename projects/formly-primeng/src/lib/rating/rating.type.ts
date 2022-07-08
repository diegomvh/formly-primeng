import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Rating } from 'primeng/rating';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-rating',
  template: `
    <p-rating
      [stars]="to.stars ?? 5"
      [cancel]="to.cancel ?? true"
      [disabled]="to.disabled ?? false"
      [readonly]="to.readonly ?? false"
      [iconOnClass]="to.iconOnClass ?? 'pi pi-star-fill'"
      [iconOffClass]="to.iconOffClass ?? 'pi pi-star'"
      [iconCancelClass]="to.iconCancelClass ?? 'pi pi-ban'"
      [iconOnStyle]="to.iconOnStyle ?? null"
      [iconOffStyle]="to.iconOffStyle ?? null"
      [iconCancelStyle]="to.iconCancelStyle ?? null"
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
