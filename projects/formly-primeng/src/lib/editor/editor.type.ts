import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorChangeEvent, EditorModule, EditorSelectionChangeEvent, EditorTextChangeEvent } from 'primeng/editor';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengEditorProps extends FormlyPrimengFieldProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengEditorProps> {
  style?: { [key: string]: any };
  formats?: string[];
  modules?: { [key: string]: any };
  bounds?: string | HTMLElement;
  scrollingContainer?: string | HTMLElement;
  debug?: string;
  onEditorInit?: (field: FormlyPrimengEditorConfig, event: Event) => void;
  onTextChange?: (field: FormlyPrimengEditorConfig, event: EditorTextChangeEvent) => void;
  onSelectionChange?: (field: FormlyPrimengEditorConfig, event: EditorSelectionChangeEvent) => void;
  onEditorChange?: (field: FormlyPrimengEditorConfig, event: EditorChangeEvent) => void;
}

export interface FormlyPrimengEditorConfig extends FieldTypeConfig<FormlyPrimengEditorProps> {
  type: 'editor' | Type<FormlyPrimengEditor>;
}

@Component({
  selector: 'formly-primeng-editor',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, EditorModule],
  template: `
    <p-editor
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [style]="props.style"
      [placeholder]="props.placeholder"
      [formats]="props.formats"
      [modules]="props.modules"
      [bounds]="props.bounds"
      [scrollingContainer]="props.scrollingContainer"
      [debug]="props.debug"
      [readonly]="props.readonly ?? false"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onEditorInit)="props.onEditorInit && props.onEditorInit(field, $event)"
      (onTextChange)="props.onTextChange && props.onTextChange(field, $event)"
      (onSelectionChange)="props.onSelectionChange && props.onSelectionChange(field, $event)"
      (onEditorChange)="props.onEditorChange && props.onEditorChange(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
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