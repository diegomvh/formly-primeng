import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengCalendar } from './calendar.type';

@NgModule({
  declarations: [FormlyPrimengCalendar],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'calendar',
          component: FormlyPrimengCalendar,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengCalendarModule {}
