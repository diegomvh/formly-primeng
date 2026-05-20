import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengRatingProps extends FormlyPrimengFieldProps, FormlyPrimengFieldEventProps<FormlyPrimengRatingProps> { }

export interface FormlyPrimengRatingConfig extends FieldTypeConfig<FormlyPrimengRatingProps> {
  type: 'rating' | Type<FormlyPrimengRating>;
}

@Component({
  selector: 'formly-primeng-rating',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, RatingModule],
  template: `
    <p-rating
      (onBlur)="props.onBlur && props.onBlur(field, $event)"
      (onFocus)="props.onFocus && props.onFocus(field, $event)"
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