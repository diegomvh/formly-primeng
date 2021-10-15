import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RatingModule } from 'primeng/rating';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengRating } from './rating.type';

@NgModule({
  declarations: [FormlyPrimengRating],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RatingModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rating',
          component: FormlyPrimengRating,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengRatingModule {}
