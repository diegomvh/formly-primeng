import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyWrapperFormFieldPanel } from './form-field-panel.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormFieldPanel],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field-panel',
          component: FormlyWrapperFormFieldPanel,
        },
      ],
    }),
  ],
})
export class FormlyFormFieldPanelModule {}
