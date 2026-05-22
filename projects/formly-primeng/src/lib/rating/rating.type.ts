import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengRatingProps extends FormlyPrimengFieldProps, FormlyPrimengFieldEventProps<FormlyPrimengRatingProps> { 
  stars?: number;
  onRate?: (field: FormlyPrimengRatingConfig, event?: any) => void;
}

export interface FormlyPrimengRatingConfig extends FieldTypeConfig<FormlyPrimengRatingProps> {
  type: 'rating' | Type<FormlyPrimengRating>;
}

@Component({
  selector: 'formly-primeng-rating',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, RatingModule],
  template: `
    <p-rating
      [stars]="props.stars"
      (onRate)="props.onRate && props.onRate(field, $event)"
      (onFocus)="props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.onBlur && props.onBlur(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRating extends FieldType<FormlyPrimengRatingConfig> {
  override defaultOptions?: Partial<FormlyPrimengRatingConfig> = {
    props: {
    },
  };
}