import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengEditorProps extends FormlyPrimengFieldProps, FormlyPrimengFieldEventProps<FormlyPrimengEditorProps> {}

export interface FormlyPrimengEditorConfig extends FieldTypeConfig<FormlyPrimengEditorProps> {
  type: 'editor' | Type<FormlyPrimengEditor>;
}

@Component({
  selector: 'formly-primeng-editor',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, EditorModule],
  template: `
    <p-editor
      [placeholder]="props.placeholder"
      (onBlur)="props.onBlur && props.onBlur(field, $event)"
      (onFocus)="props.onFocus && props.onFocus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-editor>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengEditor extends FieldType<FormlyPrimengEditorConfig> {
  override defaultOptions?: Partial<FormlyPrimengEditorConfig> = {
    props: {
    },
  };
}