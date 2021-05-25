import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengCurrency } from './currency.type';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [FormlyPrimengCurrency],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'currency',
          component: FormlyPrimengCurrency,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengCurrencyModule {}
