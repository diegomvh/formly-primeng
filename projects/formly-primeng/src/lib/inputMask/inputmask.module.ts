import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengInputMask } from './inputmask.type';


@NgModule({
  declarations: [FormlyPrimengInputMask],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'inputMask',
          component: FormlyPrimengInputMask,
          wrappers: ['form-field'],
        },
        { name: 'phone', extends: 'inputMask',
          defaultOptions: {
            templateOptions: {
              properties: {
                mask: "(999) 999-9999"
              }
            },
          },
        },
      ],
    }),
  ],
})
export class PrimengInputMaskModule {}
