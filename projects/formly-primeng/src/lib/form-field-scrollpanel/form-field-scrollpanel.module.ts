import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyWrapperFormFieldScrollPanel } from './form-field-scrollpanel.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormFieldScrollPanel],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field-scrollpanel',
          component: FormlyWrapperFormFieldScrollPanel,
        },
      ],
    }),
  ],
})
export class FormlyFormFieldScrollPanelModule {}
