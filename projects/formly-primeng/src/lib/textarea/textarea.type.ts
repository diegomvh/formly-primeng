import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

interface TextAreaProps extends FormlyFieldProps {
  autoResize?: boolean;
  fluid?: boolean;
  rows?: number;
  cols?: number;
}

export interface FormlyTextAreaFieldConfig extends FormlyFieldConfig<TextAreaProps> {
  type: 'textarea' | Type<FormlyFieldTextArea>;
}

@Component({
  selector: 'formly-field-primeng-textarea',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, TextareaModule],
  template: ` <textarea 
    [id]="id"
    pInputTextarea
    [autoResize]="props.autoResize"
    [rows]="props.rows"
    [fluid]="props.fluid"
    [cols]="props.cols"
    [formControl]="formControl" 
    [formlyAttributes]="field" 
  ></textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTextArea extends FieldType<FieldTypeConfig<TextAreaProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<TextAreaProps>> = {
    props: {},
  };
}
