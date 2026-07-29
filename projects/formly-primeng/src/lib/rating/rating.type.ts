import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengRatingProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengRatingProps> { 
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
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [stars]="props.stars ?? 5"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onRate)="props.onRate && props.onRate(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
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