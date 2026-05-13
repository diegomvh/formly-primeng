import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

interface EditorProps extends FormlyFieldProps {
}

export interface FormlyInputEditorConfig extends FormlyFieldConfig<EditorProps> {
  type: 'editor' | Type<FormlyFieldEditor>;
}

@Component({
  selector: 'formly-field-primeng-editor',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, EditorModule],
  template: `
    <p-editor
      [placeholder]="props.placeholder"
      (onBlur)="props.blur && props.blur(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-editor>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldEditor extends FieldType<FieldTypeConfig<EditorProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<EditorProps>> = {
    props: {
    },
  };
}