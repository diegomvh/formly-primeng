import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

interface RatingProps extends FormlyFieldProps {
}

export interface FormlyRatingFieldConfig extends FormlyFieldConfig<RatingProps> {
  type: 'rating' | Type<FormlyFieldRating>;
}

@Component({
  selector: 'formly-field-primeng-rating',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, RatingModule],
  template: `
    <p-rating
      (onBlur)="props.blur && props.blur(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRating extends FieldType<FieldTypeConfig<RatingProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<RatingProps>> = {
    props: {
    },
  };
}